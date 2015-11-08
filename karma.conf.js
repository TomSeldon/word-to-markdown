module.exports = function(config) {
  config.set({
    files: [
      // Vendor
      'bower_components/es5-shim/es5-shim.js',
      'bower_components/promise-polyfill/Promise.js',
      'bower_components/jquery/jquery.js',
      'node_modules/upndown/lib/upndown.bundle.js',
      'bower_components/office-ui-fabric/dist/js/jquery.fabric.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',

      // App
      'app/components/**/*.ts',
      'app/states/**/*.ts',
      'app/**/*.test.js'
    ],

    frameworks: ['jasmine'],

    reporters: ['progress'],

    browsers: ['PhantomJS'],

    preprocessors: {
      'app/**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      options: {
        declaration: true,
        noExternalResolve: false,
        sourceMap: true,
        target: 'es5'
      },

      typings: [
        'app/_typings/**/*.d.ts',
        'typings/tsd.d.ts'
      ],

      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'html', subdir: 'report-html'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.txt'},
        {type: 'text-summary'}
      ]
    }
  });
};
