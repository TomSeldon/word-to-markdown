var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});
