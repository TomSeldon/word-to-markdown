var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var project = typescript.createProject({
  declaration: true,
  noExternalResolve: true,
  sortOutput: true,
  target: 'es5'
});

gulp.task('typescript', function() {
  var result = gulp.src(['typings/**/*.ts', 'app/**/*.ts', '!app/**/*.test.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript(project));

  return result.js
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/app'));
});
