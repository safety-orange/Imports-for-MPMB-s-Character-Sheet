/*jshint esversion: 6 */

const { series, parallel, src, dest } = require('gulp');
const log = require('fancy-log');
const concat = require('gulp-concat');
const header = require('gulp-header');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');

const stableVersion = 12.999;
const betaVersion = 13;
const betaFolder = "/v13";

function concatAndMin(glob, fileName, beta) {
	log.info(`Minifying and concatenating type '${glob}' for ${beta ? `beta (${betaVersion})` : `stable (${stableVersion})`} version`);
	const folder = `WotC material${beta ? betaFolder : ''}`;
	const requiredVersion = beta ? betaVersion : stableVersion;
	return src([`${folder}/${glob}_*.js`, `!${folder}/${glob}_*_dupl.js`])
		.pipe(replace(/var iFileName ?= ?['"](.*?)['"];/g,"// $1"))
		.pipe(replace(/RequiredSheetVersion\(.*?\)[,;][\r\n]*/g, ""))
		.pipe(replace(/\/\/.*?dupl_start[\s\S]*?dupl_end.*?[\r\n]*/ig,""))
		.pipe(concat(`${fileName}.js`, {newLine: '\n'}))
		.pipe(header(`var iFileName = "${fileName}.js";\nRequiredSheetVersion(${requiredVersion});\n`))
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
		.pipe(replace(/var iFileName[\s\S]*?RequiredSheetVersion\(.*?\)[,;][\r\n]*/, ""))
		.pipe(concat(fileName, {newLine: minified ? '' : '\n'}))
		.pipe(header(`var iFileName = "${fileName}";${minified ? '' : '\n'}RequiredSheetVersion(${requiredVersion})${minified ? ',' : ';\n'}`))
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

const combineBeta = combineAllBuilder(true);

const minifyStable = series(
	parallel(
		concatAndMinPub,
		concatAndMinUA
	),
	combineStable
);

const minifyBeta = series(
	parallel(
		concatAndMinPubBeta,
		concatAndMinUABeta
	),
	combineBeta
);

const minify = parallel(
	minifyStable,
	minifyBeta
);

exports.minifyStable = minifyStable;
exports.minifyBeta = minifyBeta;
exports.minify = minify;
exports.default = minify;