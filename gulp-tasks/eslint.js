var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint', [
  'eslint:unit-tests',
  'eslint:gulp-tasks',
  'eslint:config'
]);

gulp.task('eslint:unit-tests', function() {
  return gulp.src('app/**/*.test.js')
    .pipe(eslint({
      configFile: '.eslintrc-unit-tests'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('eslint:gulp-tasks', function() {
  return gulp.src(['gulpfile.js', 'gulp-tasks/**/*.js'])
    .pipe(eslint({
      configFile: '.eslintrc-gulp-tasks'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('eslint:config', function() {
  return gulp.src(['karma.conf.js'])
    .pipe(eslint({
      configFile: '.eslintrc-commonjs-config'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
