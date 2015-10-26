var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve-static', function() {
  gulp.src('.')
    .pipe(webserver({
      https: true,
      port: '8443',
      host: '0.0.0.0',
      directoryListing: true,
      fallback: 'index.html'
    }));
});
