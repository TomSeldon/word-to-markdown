var gulp = require('gulp');

gulp.task('serve-static', function() {
  var webserver = require('gulp-webserver');

  gulp.src('.')
    .pipe(webserver({
      https: true,
      port: '8443',
      host: '0.0.0.0',
      directoryListing: true,
      fallback: 'index.html'
    }));
});
