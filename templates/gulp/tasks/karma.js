"use strict";

var karma = require('karma').server;

module.exports = (function() {
  gulp.task('karma', function (done) {
    karma.start({
      configFile: process.cwd() + '/karma.conf.js'
    }, done);
  });
})();
