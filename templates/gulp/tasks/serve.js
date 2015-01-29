"use strict";

module.exports = (function() {
    gulp.task('serve', function() {
        return browserSync({
            notify: false,
            port: 8000,
            // Run as an https by uncommenting 'https: true'
            // Note: this uses an unsigned certificate which on first access
            //       will present a certificate warning in the browser.
            // https: true,
            server: [SERVE_FOLDER]
        });
    });

    gulp.task('serve-assets', function() {
        gulp.src(['./dist/**']).pipe(gulp.dest('./serve/assets'));
        gulp.src(['./index.html']).pipe(gulp.dest('./serve'));
    });
})();
