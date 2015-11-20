var gulp = require('gulp');

gulp.task('build', [
  'typescript',
  'css',
  'html',
  'templates',
  'images'
]);
