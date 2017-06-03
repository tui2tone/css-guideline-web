var gulp = require("gulp");
var browserSync = require("browser-sync");
var server = browserSync.create()

gulp.task('browser-sync', function() {
  server.init({
    port: 3400,
    server: {
      baseDir: "./temp/"
    }
  });

  gulp.watch('./temp/**/*').on('change', function () {
    server.stream();
  });
});

gulp.task("refresh", function(cb) {
  return gulp.src("./src/app.js")
    .pipe(server.stream())
})