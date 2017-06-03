var gulp = require('gulp');

gulp.task("watch", function() {
  gulp.watch(["./src/**/*.scss"], ["sass", "refresh"])
  gulp.watch(["./src/**/*.html"], ["html", "refresh"])
  gulp.watch(["./src/**/*.js"], ["js", "refresh"])
})