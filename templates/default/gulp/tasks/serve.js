"use strict";

var clean = require('gulp-clean');

module.exports = (function() {
    /**
     * Gulp serve serves up the application. Using browser sync instead of connect.
     * @return {Object} Returns a browser sync session
     */
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

    /**
     * Gulp serve-assets moves the necessary assets to run the application locally
     * Use the gulp distribute task when you want to package up the assets for production
     */
    gulp.task('serve-assets', function() {
        gulp.src(['./dist/**']).pipe(gulp.dest('./serve/assets'));
        gulp.src(['./index.html']).pipe(gulp.dest('./serve'));

        browserSync.reload({
            stream: true
        });

    });
})();
