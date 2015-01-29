"use strict";

var runSequence = require('run-sequence');

module.exports = (function() {
  gulp.task('develop', function(cb) {
    runSequence(['sass', 'templates'], 'browserify', 'serve-assets', 'serve', 'karma', cb);
  });
})();
