"use strict";

module.exports = (function() {
  gulp.task('views', function () {
    gulp.src('index.html')
        .pipe(browserSync.reload({stream: true}));

    gulp.src('./app/**/*.html')
        .pipe(browserSync.reload({stream: true}));
  });
})();
