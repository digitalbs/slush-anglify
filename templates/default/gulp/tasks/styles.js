"use strict";

var sass = require('gulp-sass'),
  runSequence = require('run-sequence'),
  concat = require('gulp-concat');

module.exports = (function() {
  /**
   * Gulp sass. Compiles sass into CSS and bundles it for distribution
   */
  gulp.task('sass', function() {
    gulp.src([
        './lib/bootstrap-sass-official/assets/stylesheets/bootstrap.scss',
        './app/sass/*.scss'
      ])
      .pipe(sass())
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./dist/css'));
  });

  /**
   * Gulp task to watch templates
   */
  gulp.task('watchStyles', function(cb) {
    runSequence(['sass'], 'serve-assets', cb);
  });

  /*
   * Setup watch for templates
   */
  gulp.watch('./app/sass/**/*.scss', ['watchStyles']);

})();
