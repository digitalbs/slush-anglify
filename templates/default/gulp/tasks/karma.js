"use strict";

var karma = require('karma').server;

module.exports = (function() {
  var karmaOptions = {
    configFile: process.cwd() + '/karma.conf.js'
  };

  if(argv.coverage) {
    karmaOptions.reporters = ['progress', 'coverage'];
  }

  /**
   * Gulp Karma. Using the karma module to run our tests. No need for a gulp plugin.
   */
  gulp.task('karma', function(done) {
    karma.start(karmaOptions, done);
  });
})();
