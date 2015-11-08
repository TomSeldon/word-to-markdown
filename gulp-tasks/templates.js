var gulp = require('gulp');
var ngTemplates = require('gulp-ng-templates');
var htmlmin = require('gulp-htmlmin');

gulp.task('templates', function() {
  gulp.src('app/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(ngTemplates({
      filename: 'templates.js',
      standalone: false,
      module: 'word-to-markdown',
      path: function(path, base) {
        return path.replace(base, 'app/');
      }
    }))
    .pipe(gulp.dest('dist/app'));
});
