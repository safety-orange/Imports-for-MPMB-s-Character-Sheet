/*jshint esversion: 6 */

const { series, parallel, src, dest } = require('gulp');
const fs      = require('fs');
const log     = require('fancy-log');
const concat  = require('gulp-concat');
const header  = require('gulp-header');
const rename  = require('gulp-rename');
const replace = require('gulp-replace');
const uglify  = require('gulp-uglify');

const stableVersion = '"13.1.13"';
const betaVersion   = '"13.2.0-beta1"';
const betaFolder    = "/v13.2";
const parentFolder  = "WotC material";
const hasBetaFolder = fs.existsSync(`${parentFolder}${betaFolder}`);
const aStableVer    = stableVersion.match(/\d+/g);
const stableVerNo   = aStableVer[0] + aStableVer[1].padStart(3, '0') + aStableVer[2].padStart(3, '0');
const tooOldcheck   = 'if (sheetVersion < ' + stableVerNo + ') { throw "This script was made for a newer version of the sheet (v' + stableVersion.replace(/"/g, '') + '). Please use the latest version and try again.\\nYou can get the latest version at www.flapkan.com."; };';

function concatAndMin(glob, fileName, beta) {
	log.info(`Minifying and concatenating type '${glob}' for ${beta ? `beta (${betaVersion})` : `stable (${stableVersion})`} version`);
	const folder = `${parentFolder}${beta ? betaFolder : ''}`;
	const requiredVersion = beta ? betaVersion : stableVersion;
	return src([`${folder}/${glob}_*.js`, `!${folder}/${glob}_*_dupl.js`, `!${folder}/${glob}_*_wip.js`])
		.pipe(replace(/var iFileName ?= ?['"](.*?)['"];/g,"// $1"))
		.pipe(replace(/RequiredSheetVersion\(.*?\)[,;][\r\n]*/g, ""))
		.pipe(replace(/\/\/.*?dupl_start[\s\S]*?dupl_end.*?[\r\n]*/ig,""))
		.pipe(concat(`${fileName}.js`, {newLine: '\n'}))
		.pipe(header(`${tooOldcheck}\nvar iFileName = "${fileName}.js";\nRequiredSheetVersion(${requiredVersion});\n`))
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
	const fileName = `${fileHead}pub+UA${ext}`;
	const requiredVersion = beta ? betaVersion : stableVersion;
	return src([`${path}published${ext}`, `${path}unearthed_arcana${ext}`])
		.pipe(replace(/if ?\(sheetVersion ?< ?\d+\.?\d*e?\d*\)[ {]*?throw[\s\S]*?var iFileName[\s\S]*?RequiredSheetVersion\(.*?\)[,;][\r\n]*/, ""))
		.pipe(concat(fileName, {newLine: minified ? '' : '\n'}))
		.pipe(header(`${tooOldcheck}\nvar iFileName = "${fileName}";${minified ? '' : '\n'}RequiredSheetVersion(${requiredVersion});${minified ? '' : '\n'}`))
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