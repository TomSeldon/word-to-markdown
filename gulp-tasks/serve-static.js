var gulp = require('gulp');

gulp.task('serve-static', function() {
  var webserver = require('gulp-webserver');
  var rewrite = require('connect-url-rewrite');

  gulp.src('.')
    .pipe(webserver({
      https: true,
      port: '8443',
      host: '0.0.0.0',
      middleware: rewrite([
        '^/index.html /dist/index.html',
        '^/vendor/(.+) /bower_components/$1',
        '^/app/(.+) /dist/app/$1',
        '^/css/(.+) /dist/css/$1',
        '^/images/(.+) /dist/images/$1'
      ])
    }));
});
