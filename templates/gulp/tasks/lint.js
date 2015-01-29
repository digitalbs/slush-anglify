"use strict";

var jshint = jshint = require('gulp-jshint');

module.exports = (function() {
  gulp.task('lint', function () {
      gulp.src('./app/**/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
  });
})();

