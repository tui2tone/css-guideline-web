var gulp = require("gulp");
var concat = require("gulp-concat");

var jsLibs = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/icheck/icheck.min.js'
]

var cssLibs = [
  'node_modules/font-awesome/css/font-awesome.css'
]

gulp.task('vendor', ['vendor:js', 'vendor:css']);
gulp.task('build::vendor', ['build::vendor:js', 'build::vendor:css']);

gulp.task('vendor:js', function () {
  return gulp.src(jsLibs)
    .pipe(gulp.dest('temp/assets/js'))
});

gulp.task('vendor:css', function () {
  return gulp.src(cssLibs)
    .pipe(gulp.dest('temp/assets/css'))
});

gulp.task('build::vendor:js', function () {
  return gulp.src(jsLibs)
    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('build::vendor:css', function () {
  return gulp.src(cssLibs)
    .pipe(gulp.dest('dist/assets/css'))
});