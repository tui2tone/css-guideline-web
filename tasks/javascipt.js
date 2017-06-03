var gulp = require("gulp")

gulp.task('js', function () {
  return gulp.src("./src/components/app.js")
    .pipe(gulp.dest('temp/assets/js'))
});

gulp.task('build::js', function () {
  return gulp.src("./src/components/app.js")
    .pipe(gulp.dest('dist/assets/js'))
});