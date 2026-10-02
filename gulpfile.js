/*jshint esversion: 6 */

const { series, parallel, src, dest } = require("gulp");
const fs      = require("fs");
const { Transform } = require("stream");
const log     = require("fancy-log");
const concat  = require("gulp-concat");
const header  = require("gulp-header");
const rename  = require("gulp-rename");
const replace = require("gulp-replace");
const uglify  = require("gulp-uglify");

const fileHeadFor = (edition) => `all_WotC_${edition}_`;

// The types of files that are concatenated, by their file name prefix
const types = {
	pub: "published",
	legacy: "legacy",
	ua: "unearthed_arcana",
};

const editions = {
	"5e": {
		folder: "WotC 5e",
		version: '"14.1.0"',
		maxVersion: '"15.0.0"',
		types: ["pub", "ua"],
		combos: [
			["pub", "ua"],
		],
	},
	"2024": {
		folder: "WotC 2024",
		version: '"24.1.0"',
		maxVersion: false,
		types: ["pub", "legacy", "ua"],
		combos: [
			["pub", "ua"],
			["pub", "legacy"],
			["pub", "ua", "legacy"],
		],
	},
};

function getTooOldCheck(requiredVersion, maxVersion) {
	if (!requiredVersion) return "";
	const aVer  = requiredVersion.match(/\d+/g);
	const verNo = aVer[0] + aVer[1].padStart(3, "0") + aVer[2].padStart(3, "0");
	const latest = !maxVersion ? "the latest version" : `this required version or a later version (but lower than v${maxVersion.replace(/"/g, "")})`;
	return `if (sheetVersion < ${verNo}) { throw "This add-on script was made for a newer version of the sheet (v${requiredVersion.replace(/"/g, "")}). Please use ${latest} and try again.\\n\\nYou can get the different versions at www.flapkan.com.\\n\\nFrom v24.0.0 onwards, the sheet uses the 2024 (5.5e) rules, while lower versions use the 5e (2014) rules."; };`;
}
function getTooNewCheck(requiredVersion, maxVersion) {
	if (!maxVersion) return "";
	const aVer  = maxVersion.match(/\d+/g);
	const verNo = aVer[0] + aVer[1].padStart(3, "0") + aVer[2].padStart(3, "0");
	return `if (sheetVersion >= ${verNo}) { throw "This add-on script was made for a lower version of the sheet (one before v${maxVersion.replace(/"/g, "")}). Please use the required version (v${requiredVersion.replace(/"/g, "")}) or a later version and try again.\\n\\nYou can get the different versions at www.flapkan.com.\\n\\nFrom v24.0.0 onwards, the sheet uses the 2024 (5.5e) rules, while lower versions use the 5e (2014) rules."; };`;
}

function editionLabel(edition) {
	return `WotC ${edition} (${editions[edition].version.replace(/"/g, "")})`;
}

// Fail the build if an output file isn't valid JavaScript or doesn't have exactly one iFileName and RequiredSheetVersion.
// This catches changes in the minifier's output that the header-stripping regex in combine() doesn't account for.
function validate() {
	return new Transform({
		objectMode: true,
		transform(file, _enc, callback) {
			const name = file.basename;
			const contents = file.contents.toString();
			const problems = [];
			try {
				new Function(contents);
			} catch (e) {
				problems.push(`not valid JavaScript (${e.message})`);
			}
			const fileNames = contents.match(/\biFileName ?= ?['"][^'"]*['"]/g) || [];
			if (fileNames.length !== 1) {
				problems.push(`expected 1 iFileName, found ${fileNames.length}`);
			} else if (!fileNames[0].includes(`"${name}"`)) {
				problems.push(`iFileName doesn't match file name (${fileNames[0]})`);
			}
			const versionCalls = (contents.match(/\bRequiredSheetVersion\(/g) || []).length;
			if (versionCalls !== 1) problems.push(`expected 1 RequiredSheetVersion, found ${versionCalls}`);
			if (problems.length) {
				callback(new Error(`Invalid output '${name}': ${problems.join("; ")}`));
			} else {
				callback(null, file);
			}
		},
	});
}

// Whether the folder contains any source files of this type (excluding duplicates and work in progress)
function hasSourceFiles(folder, type) {
	return fs.readdirSync(folder).some(file =>
		file.startsWith(`${type}_`) && file.endsWith(".js") && !/_(dupl|wip)\.js$/.test(file)
	);
}

function concatAndMin(edition, type) {
	const { folder, version: requiredVersion, maxVersion } = editions[edition];
	const fileName = `${fileHeadFor(edition)}${types[type]}`;
	if (!hasSourceFiles(folder, type)) {
		log.info(`Skipping type '${type}' for ${editionLabel(edition)}, no source files found`);
		return Promise.resolve();
	}
	log.info(`Minifying and concatenating type '${type}' for ${editionLabel(edition)}`);
	const tooOldCheck = getTooOldCheck(requiredVersion, maxVersion);
	const tooNewCheck = getTooNewCheck(requiredVersion, maxVersion);
	return src([`${folder}/${type}_*.js`, `!${folder}/${type}_*_dupl.js`, `!${folder}/${type}_*_wip.js`])
		.pipe(replace(/var iFileName ?= ?['"](.*?)['"];/g,"// $1"))
		.pipe(replace(/RequiredSheetVersion\(.*?\)[,;][\r\n]*/g, ""))
		.pipe(replace(/\/\/.*?dupl_start[\s\S]*?dupl_end.*?[\r\n]*/ig,""))
		.pipe(concat(`${fileName}.js`, { newLine: "\n" }))
		.pipe(header(`${tooOldCheck}\n${tooNewCheck}\nvar iFileName = "${fileName}.js";\nRequiredSheetVersion(${requiredVersion}${maxVersion ? ", " + maxVersion : ""});\n\n`))
		.pipe(validate())
		.pipe(dest(folder))
		.pipe(uglify())
		.pipe(replace(`${fileName}.js`, `${fileName}.min.js`))
		.pipe(rename({ extname: ".min.js" }))
		.pipe(validate())
		.pipe(dest(folder));
}

function combine(edition, combo, minified) {
	const { folder, version: requiredVersion, maxVersion } = editions[edition];
	const comboName = combo.map(type => type === "ua" ? "UA" : type).join("+");
	const ext = minified ? ".min.js" : ".js";
	const newLine = minified ? "" : "\n";
	const fileHead = fileHeadFor(edition);
	const fileName = `${fileHead}${comboName}${ext}`;
	const missing = combo.filter(type => !hasSourceFiles(folder, type));
	if (missing.length) {
		log.info(`Skipping ${minified ? "minified" : "unminified"} '${comboName}' for ${editionLabel(edition)}, no source files found for type(s): ${missing.join(", ")}`);
		return Promise.resolve();
	}
	log.info(`Combining ${minified ? "minified" : "unminified"} '${comboName}' for ${editionLabel(edition)}`);
	const tooOldCheck = getTooOldCheck(requiredVersion, maxVersion);
	const tooNewCheck = getTooNewCheck(requiredVersion, maxVersion);
	// When minified, the version checks are removed, as well as the iFileName and RequiredSheetVersion.
	// If iFileName is its own var statement, remove it completely, otherwise keep the 'var' for the other variables.
	const replaceStartRx = minified ?
		/if ?\(sheetVersion ?< ?\d+\.?\d*e?\d*\)[ {]*?throw[\s\S]*?;var iFileName ?= ?['"][^'"]*['"];|if ?\(sheetVersion ?< ?\d+\.?\d*e?\d*\)[ {]*?throw[\s\S]*?(var)|()RequiredSheetVersion\(.*?\)[,;]|()iFileName ?= ?['"].*?['"][,;]/g
		:
		/if ?\(sheetVersion ?< ?\d+\.?\d*e?\d*\)[ {]*?throw[\s\S]*?RequiredSheetVersion\(.*?\)[,;][\r\n]*/;
	const replaceStartWith = minified ? "$1" : "";
	let headerChecks = [tooOldCheck];
	if (tooNewCheck) headerChecks.push(tooNewCheck);
	headerChecks = headerChecks.concat([
		`var iFileName = "${fileName}";`,
		`RequiredSheetVersion(${requiredVersion}${maxVersion ? ", " + maxVersion : ""});`,
		"",
		"",
	]);
	return src(combo.map(type => `${folder}/${fileHead}${types[type]}${ext}`))
		.pipe(replace(replaceStartRx, replaceStartWith))
		.pipe(concat(fileName, { newLine }))
		.pipe(header(headerChecks.join(newLine)))
		.pipe(validate())
		.pipe(dest(folder));
}

// Give each task a descriptive name, so gulp's own logging is readable
function named(name, fn) {
	Object.defineProperty(fn, "name", { value: name });
	return fn;
}

function minifyEditionBuilder(edition) {
	const { types: editionTypes, combos } = editions[edition];
	const concatTasks = editionTypes.map(type =>
		named(`concatAndMin_${edition}_${type}`, () => concatAndMin(edition, type))
	);
	const combineTasks = [];
	combos.forEach(combo => {
		const comboName = combo.join("+");
		combineTasks.push(named(`combineUnminified_${edition}_${comboName}`, () => combine(edition, combo, false)));
		combineTasks.push(named(`combineMinified_${edition}_${comboName}`, () => combine(edition, combo, true)));
	});
	return series(
		parallel(...concatTasks),
		parallel(...combineTasks)
	);
}

const minify5e   = minifyEditionBuilder("5e");
const minify2024 = minifyEditionBuilder("2024");

const minify = parallel(
	minify5e,
	minify2024
);

exports.minify5e   = minify5e;
exports.minify2024 = minify2024;
exports.minify     = minify;
exports.default    = minify;
