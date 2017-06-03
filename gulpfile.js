var gulp = require("gulp");
var requireDir = require("require-dir");
var runSequence = require("run-sequence");

const tasks = requireDir("./tasks");

gulp.task("dev", function() {
  return runSequence('clean', 'sass', 'js', 'fonts', 'images', 'vendor', 'html', 'browser-sync', 'watch');
})

gulp.task("build", function() {
  return runSequence('build::clean', 'build::sass', 'build::js', 'build::fonts', 'build::images', 'build::vendor', 'build::html');
})