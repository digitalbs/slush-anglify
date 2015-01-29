"use strict";

var browserify = require('browserify'),
  source = require('vinyl-source-stream');

module.exports = (function() {
  gulp.task('browserify', function () {
    return browserify('./app/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({stream: true}));
  });
})();
