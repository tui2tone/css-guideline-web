var gulp = require("gulp")

const fonts = {
  'font-awesome': 'node_modules/font-awesome/fonts/*'
}

gulp.task('fonts', ['fonts:font-awesome', 'assets:fonts']);
gulp.task('build::fonts', ['build::fonts:font-awesome', 'build::assets:fonts']);

gulp.task('fonts:font-awesome', function () {
  return gulp.src(fonts['font-awesome'])
    .pipe(gulp.dest('temp/assets/fonts'))
});

gulp.task('build::fonts:font-awesome', function () {
  return gulp.src(fonts['font-awesome'])
    .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('assets:fonts', function () {
  return gulp.src("./src/fonts/**/*")
    .pipe(gulp.dest('temp/assets/fonts'))
});

gulp.task('build::assets:fonts', function () {
  return gulp.src("./src/fonts/**/*")
    .pipe(gulp.dest('dist/assets/fonts'))
});