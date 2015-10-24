module.exports = function(config) {
  config.set({
    files: [
      // Vendor
      'bower_components/jquery/jquery.js',
      'bower_components/office-ui-fabric/dist/js/jquery.fabric.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',

      // App
      'app/components/**/*.js',
      'app/states/**/*.js'
    ],

    frameworks: ['jasmine'],

    reporters: ['progress', 'coverage'],

    browsers: ['PhantomJS'],

    preprocessors: {
      'app/**/!(*.test).js': ['coverage']
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'html', subdir: 'report-html'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.txt'}
      ]
    }
  });
};
