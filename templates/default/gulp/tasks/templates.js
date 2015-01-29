var templateCache = require('gulp-angular-templatecache'),
  runSequence = require('run-sequence');

module.exports = (function() {
  /**
   * Gulp templates. Compiles all HTML into JS for use in the application. Uses angular templatecache
   */
  gulp.task('templates', function() {
    gulp.src('./app/**/*.html')
      .pipe(templateCache({
        module: "templates",
        standalone: true,
        root: "app/"
      }))
      .pipe(gulp.dest('./app'));
  });

  /**
   * Gulp task to watch templates
   */
  gulp.task('watchTemplates', function(cb) {
    runSequence(['templates', 'browserify'], 'serve-assets', cb);
  });

  /*
   * Setup watch for templates
   */
  gulp.watch('./app/**/*.html', ['watchTemplates']);

})();
