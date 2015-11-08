var gulp = require('gulp');

gulp.task('tslint', function() {
  var tslint = require('gulp-tslint');

  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});
