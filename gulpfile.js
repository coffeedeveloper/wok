var gulp      = require('gulp');
var stylus    = require('gulp-stylus');
var nib       = require('nib');
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

gulp.task('stylus', function () {
  gulp.src(['./src/global.styl','./src/*.styl'])
    .pipe(stylus({ use: [nib()], import: 'import/*.styl' }))
    .pipe(concat('wok.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCSS())
    .pipe(rename('wok-min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['stylus']);
