var gulp = require('gulp');

gulp.task('coveralls', function() {
  var coveralls = require('gulp-coveralls');

  return gulp.src('coverage/**/lcov.info')
    .pipe(coveralls());
});
