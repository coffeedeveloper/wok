var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css')

gulp.task('stylus', function () {
  gulp.src('./src/*.styl')
    .pipe(stylus({ use: [nib()], import: 'import/*.styl' }))
    .pipe(concat('wok.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCSS())
    .pipe(rename('wok-min.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['stylus'])
