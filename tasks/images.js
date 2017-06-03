'use strict';

var gulp = require("gulp");
// var imagemin = require("gulp-imagemin");

gulp.task('images', function() {
  return gulp.src('./src/assets/images/**/*')
    .pipe(gulp.dest('temp/assets/images'))
});

gulp.task('build::images', function() {
  return gulp.src('./src/assets/images/**/*')
    .pipe(gulp.dest('dist/assets/images'))
});