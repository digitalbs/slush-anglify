"use strict";

var bower = require('gulp-bower'),
  clean = require('gulp-clean');

module.exports = (function() {
  gulp.task('bower_install', function() {
    return bower()
      .pipe(gulp.dest('./lib/'));
  });

  gulp.task('bower', ['bower_install'], function() {
    return gulp.src('./bower_components', {
        read: false
      })
      .pipe(clean());
  });
})();
