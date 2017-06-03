var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var source = require("vinyl-source-stream");
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var concat = require("gulp-concat");
var autoprefixer = require("autoprefixer");
var stripCssComments = require("gulp-strip-css-comments");

gulp.task("sass", function() {
  return gulp.src([
      "./src/scss/app.scss"
    ])
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "CSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer({ browsers: ['last 2 versions'] })
    ]))
    .pipe(stripCssComments())
    .pipe(gulp.dest('./temp/assets/css/'))
})

gulp.task("build::sass", function() {
  return gulp.src([
      "./src/scss/app.scss"
    ])
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer({ browsers: ['last 5 versions'] })
    ]))
    .pipe(stripCssComments())
    .pipe(gulp.dest('./dist/assets/css/'))
})