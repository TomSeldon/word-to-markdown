var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('css', function() {
  return gulp.src([
    'content/Office.css',
    'bower_components/microsoft.office.js/styles/OfficeThemes.css',
    'bower_components/office-ui-fabric/dist/css/fabric.min.css',
    'bower_components/office-ui-fabric/dist/css/fabric.components.min.css',
    'content/app.css',
    'app/**/*.css'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(minify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'));
});
