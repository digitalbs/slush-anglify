"use strict";

var bower = require('gulp-bower'),
  runSequence = require('run-sequence'),
  clean = require('gulp-clean');

module.exports = (function() {
  /**
   * Gulp bower-install task which pulls down the bower third-party dependencies and places them into the lib directory
   */
  gulp.task('bower-install', function() {
    return bower()
      .pipe(gulp.dest('./lib/'));
  });

  /**
   * Gulp bower-clean task cleans temporary bower components directory
   */
  gulp.task('bower-clean', function() {
    return gulp.src('./bower_components', {
        read: false
      })
      .pipe(clean());
  })

  /**
   * Gulp bower task uses the bower-install task to pull down the files, and bower-clean to clean up the temporary bower_components directory
   */
  gulp.task('bower', function() {
    runSequence('bower-install', 'bower-clean', function() {
      process.exit(0);
    });
  });
})();
