/*jshint esversion: 6 */

const { series, parallel, src, dest } = require('gulp');
const fs      = require('fs');
const log     = require('fancy-log');
const concat  = require('gulp-concat');
const header  = require('gulp-header');
const rename  = require('gulp-rename');
const replace = require('gulp-replace');
const uglify  = require('gulp-uglify');

const stableVersion = '"14.0.5-beta"';
const stableMaxVers = '"15.0.0"';
const betaVersion   = '"24.0.5-beta"';
const betaMaxVers   = false;
const betaFolder    = "/v24";
const parentFolder  = "WotC material";
const hasBetaFolder = fs.existsSync(`${parentFolder}${betaFolder}`);

function getTooOldCheck(requiredVersion, maxVersion) {
	if (!requiredVersion) return '';
	const aVer  = requiredVersion.match(/\d+/g);
	const verNo = aVer[0] + aVer[1].padStart(3, '0') + aVer[2].padStart(3, '0');
	const latest = !maxVersion ? 'the latest version' : `this required version or a later version (but lower than v${maxVersion.replace(/"/g, '')})`;
	return `if (sheetVersion < ${verNo}) { throw "This add-on script was made for a newer version of the sheet (v${requiredVersion.replace(/"/g, '')}). Please use ${latest} and try again.\\n\\nYou can get the different versions at www.flapkan.com.\\n\\nFrom v24.0.0 onwards, the sheet uses the 2024 (5.5e) rules, while lower versions use the 5e (2014) rules."; };`;
}
function getTooNewCheck(requiredVersion, maxVersion) {
	if (!maxVersion) return '';
	const aVer  = maxVersion.match(/\d+/g);
	const verNo = aVer[0] + aVer[1].padStart(3, '0') + aVer[2].padStart(3, '0');
	return `if (sheetVersion >= ${verNo}) { throw "This add-on script was made for a lower version of the sheet (one before v${maxVersion.replace(/"/g, '')}). Please use the required version (v${requiredVersion.replace(/"/g, '')}) or a later version and try again.\\n\\nYou can get the different versions at www.flapkan.com.\\n\\nFrom v24.0.0 onwards, the sheet uses the 2024 (5.5e) rules, while lower versions use the 5e (2014) rules."; };`;
}

function concatAndMin(glob, fileName, beta) {
	log.info(`Minifying and concatenating type '${glob}' for ${beta ? `beta (${betaVersion})` : `stable (${stableVersion})`} version`);
	const folder = `${parentFolder}${beta ? betaFolder : ''}`;
	const requiredVersion = beta ? betaVersion : stableVersion;
	const maxVersion = beta ? betaMaxVers : stableMaxVers;
	const tooOldCheck = getTooOldCheck(requiredVersion, maxVersion);
	const tooNewCheck = getTooNewCheck(requiredVersion, maxVersion);
	return src([`${folder}/${glob}_*.js`, `!${folder}/${glob}_*_dupl.js`, `!${folder}/${glob}_*_wip.js`])
		.pipe(replace(/var iFileName ?= ?['"](.*?)['"];/g,"// $1"))
		.pipe(replace(/RequiredSheetVersion\(.*?\)[,;][\r\n]*/g, ""))
		.pipe(replace(/\/\/.*?dupl_start[\s\S]*?dupl_end.*?[\r\n]*/ig,""))
		.pipe(concat(`${fileName}.js`, {newLine: '\n'}))
		.pipe(header(`${tooOldCheck}\n${tooNewCheck}\nvar iFileName = "${fileName}.js";\nRequiredSheetVersion(${requiredVersion}${maxVersion ? ', ' + maxVersion : ''});\n\n`))
		.pipe(dest(folder))
		.pipe(uglify())
		.pipe(replace(`${fileName}.js`, `${fileName}.min.js`))
		.pipe(rename({extname: '.min.js'}))
		.pipe(dest(folder));
}

function combine(minified, beta) {
	const folder = `WotC material${beta ? betaFolder : ''}`;
	const fileHead = 'all_WotC_';
	const path = `${folder}/${fileHead}`;
	const ext = minified ? '.min.js' : '.js';
	const newLine = minified ? '' : '\n';
	const fileName = `${fileHead}pub+UA${ext}`;
	const requiredVersion = beta ? betaVersion : stableVersion;
	const maxVersion = beta ? betaMaxVers : stableMaxVers;
	const tooOldCheck = getTooOldCheck(requiredVersion, maxVersion);
	const tooNewCheck = getTooNewCheck(requiredVersion, maxVersion);
	const replaceStartRx = minified ? 
		/if ?\(sheetVersion ?< ?\d+\.?\d*e?\d*\)[ {]*?throw[\s\S]*?(var)|()RequiredSheetVersion\(.*?\)[,;]|()iFileName ?= ?['"].*?['"][,;]/g
		:
		/if ?\(sheetVersion ?< ?\d+\.?\d*e?\d*\)[ {]*?throw[\s\S]*?RequiredSheetVersion\(.*?\)[,;][\r\n]*/;
	const replaceStartWith = minified ? '$1' : '';
	let headerChecks = [tooOldCheck];
	if (tooNewCheck) headerChecks.push(tooNewCheck);
	headerChecks = headerChecks.concat([
		`var iFileName = "${fileName}";`,
		`RequiredSheetVersion(${requiredVersion}${maxVersion ? ', ' + maxVersion : ''});`,
		'', '',
	]);
	return src([`${path}published${ext}`, `${path}unearthed_arcana${ext}`])
		.pipe(replace(replaceStartRx, replaceStartWith))
		.pipe(concat(fileName, {newLine}))
		.pipe(header(headerChecks.join(newLine)))
		.pipe(dest(folder));
}

const combineUnminifiedBuilder = (beta) => {
	const combineUnminified = () => {
		log.info(`Combining Unminified Published and UA for ${beta ? `beta (${betaVersion})` : `stable (${stableVersion})`} version`);
		return combine(false, beta);
	}
	return combineUnminified;
};
const combineMinifiedBuilder = (beta) => {
	const combineMinified = () => {
		log.info(`Combining Minified Published and UA for ${beta ? `beta (${betaVersion})` : `stable (${stableVersion})`} version`);
		return combine(true, beta);
	}
	return combineMinified;
};

const combineAllBuilder = (beta) => {
	const combineAll = parallel(combineUnminifiedBuilder(beta), combineMinifiedBuilder(beta));
	return combineAll;
};

function concatAndMinPub() {
	return concatAndMin("pub", "all_WotC_published");
}

function concatAndMinUA() {
	return concatAndMin("ua", "all_WotC_unearthed_arcana");
}

const combineStable = combineAllBuilder();

function concatAndMinPubBeta() {
	return concatAndMin("pub", "all_WotC_published", true);
}

function concatAndMinUABeta() {
	return concatAndMin("ua", "all_WotC_unearthed_arcana", true);
}

const minifyStable = series(
	parallel(
		concatAndMinPub,
		concatAndMinUA
	),
	combineStable
);

let minify;

if ( hasBetaFolder ) {

	const combineBeta = combineAllBuilder(true);

	const minifyBeta = series(
		parallel(
			concatAndMinPubBeta,
			concatAndMinUABeta
		),
		combineBeta
	);

	exports.minifyBeta   = minifyBeta;
	
	minify = parallel(
		minifyStable,
		minifyBeta
	);

} else {

	minify = minifyStable;

}

exports.minifyStable = minifyStable;
exports.minify       = minify;
exports.default      = minify;