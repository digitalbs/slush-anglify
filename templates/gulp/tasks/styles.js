"use strict";

var sass = require('gulp-sass');
var concat = require('gulp-concat');

module.exports = (function() {
  gulp.task('sass', function () {
      gulp.src([
          './lib/bootstrap-sass-official/assets/stylesheets/bootstrap.scss',
          './app/sass/*.scss'
      ])
          .pipe(sass())
          .pipe(concat('app.css'))
          .pipe(gulp.dest('./dist/css'))
          .pipe(browserSync.reload({stream: true}));
  });
})();
