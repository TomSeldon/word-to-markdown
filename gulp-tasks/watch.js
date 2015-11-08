var gulp = require('gulp');

gulp.task('watch', ['build'], function() {
  gulp.watch(['app/**/*.css', 'content/**/*.css'], ['css']);
  gulp.watch('app/**/*.html', ['templates']);
  gulp.watch('app/**/*.ts', ['typescript']);
});
