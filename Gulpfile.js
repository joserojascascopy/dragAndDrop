const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function css() {
    return src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'));
};

function js() {
    return src('./src/js/**/*.js')
        .pipe(dest('./build/js'));
}

function watchArchivos() {
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', js);
}

exports.css = css;
exports.js = js;
exports.watchArchivos = watchArchivos;

exports.default = parallel(css, js, watchArchivos);