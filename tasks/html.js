var gulp = require('gulp');
var inject = require('gulp-inject');
var _ = require("underscore")
var fileinclude = require("gulp-file-include")
var htmlhint = require("gulp-htmlhint")
var rename = require("gulp-rename")

var config = require("./config")

const files = [
  './**/jquery.js',
  './**/*.js',
  './**/*.css'
]

const path = __dirname.replace("/tasks", "")
 
gulp.task('html', function () {
  var target = gulp.src('./src/**/*.html');
  var sources = gulp.src(files, {read: false, cwd: path + '/temp/'});
 
  return target
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    // .pipe(htmlhint())
    // .pipe(htmlhint.reporter())
    .pipe(inject(sources, { addRootSlash: true }))
    // .pipe(rename(function (path) {
    //   path.extname = ".php"
    // }))
    .pipe(gulp.dest('./temp'));
});


gulp.task('build::html', function () {
  var target = gulp.src('./src/*.html');
  var sources = gulp.src(files, {read: false, cwd: path + '/dist'});
 
  return target
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    // .pipe(htmlhint())
    // .pipe(htmlhint.reporter())
    .pipe(inject(sources, { addRootSlash: true }))
    // .pipe(rename(function (path) {
    //   path.extname = ".php"
    // }))
    .pipe(gulp.dest('./dist'));
});