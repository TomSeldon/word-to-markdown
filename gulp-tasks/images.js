'use strict';

var gulp = require('gulp');

gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'));
});
