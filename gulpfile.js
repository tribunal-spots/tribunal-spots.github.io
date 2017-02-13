const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const merge = require('merge-stream');
const path = require('path');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

const webpackConfig = require('./webpack.config.js');
const siteRoot = '_site';

let ENV = 'development';
let BASE_URL = '';

if (process.env.ENV === 'production') {
    ENV = 'production';
    BASE_URL = '/nsu-spots'
}

gulp.task('fonts', () => {
    return gulp.src([
        'src/fonts/**/*',
    ])
    .pipe(gulp.dest('assets/fonts/'));
});

gulp.task('scripts', () => {
    return gulp.src('src/scripts/main.js')
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(replace('{{BASE_URL}}', BASE_URL))
        .pipe(gulp.dest('assets/scripts/'));
});

gulp.task('styles', () => {
    const fontAssets = gulp.src([
        './src/styles/fonts.scss',
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano({
            zindex: false,
            discardUnused: {
                fontFace: false
            },
        }))
        .pipe(gulp.dest('./assets/styles/'));

    const sassAssets = gulp.src([
        './src/styles/main.scss',
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'Explorer >= 10',
                'last 1 Edge versions',
                'last 3 iOS versions',
                'last 2 Safari versions',
                'last 2 ChromeAndroid versions',
                'Android >= 4.1',
            ],
        }))
        .pipe(cssnano({
            zindex: false,
        }))
        .pipe(gulp.dest('./assets/styles/'));
});

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['build',
        '--watch',
        '--incremental',
        '--drafts',
  ]);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('browserSyncServe', () => {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        server: {
            baseDir: siteRoot
        }
    });
});

gulp.task('watch', () => {
    gulp.watch('./src/scripts/**/*', ['scripts']);
    gulp.watch('./src/styles/**/*', ['styles']);
});

gulp.task('serve', [
    'fonts',
    'scripts',
    'styles',
    'jekyll',
    'watch',
    'browserSyncServe',
]);

gulp.task('default', [
    'fonts',
    'scripts',
    'styles',
]);