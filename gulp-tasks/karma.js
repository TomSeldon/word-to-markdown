var gulp = require('gulp');
var path = require('path');
var Server = require('karma').Server;
var configFile = path.join(__dirname, '..', 'karma.conf.js');

gulp.task('karma:ci', function(done) {
  new Server({
    configFile: configFile,
    singleRun: true
  }, done)
    .start();
});

gulp.task('karma:tdd', function(done) {
  new Server({
    configFile: configFile,
    singleRun: false
  }, done)
    .start();
});
