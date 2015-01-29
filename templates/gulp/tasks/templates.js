var templateCache = require('gulp-angular-templatecache');

module.exports = (function() {
  gulp.task('templates', function() {
    gulp.src('./app/**/*.html')
      .pipe(templateCache({
            module: "templates",
            standalone: true,
            root: "app/"
          }))
      .pipe(gulp.dest('./app'));
  });
})();
