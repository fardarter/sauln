const gulp = require("gulp");
const sass = require("gulp-sass");

// a task to generate the css with sass
gulp.task("css", function () {
  return gulp
    .src("./sass/style.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("index", function () {
  return gulp.src("./index.html").pipe(gulp.dest("./dist"));
});

/*
  Watch folders for changes
*/
gulp.task("watch", function () {
  gulp.watch("./sass/*.scss", gulp.parallel("css"));
  gulp.watch("./index.html", gulp.parallel("index"));
});

/*
  Let's build this sucker.
*/
gulp.task("build", gulp.parallel("css", "index"));
