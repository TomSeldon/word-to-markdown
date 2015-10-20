(function(Office, angular){
  'use strict';

  var appName = 'word-to-markdown';
  var officeInitialised = false;
  var initialisationMaxTime = 3000; // Max time in ms before we report error that we haven't started

  angular.module(appName, [
    // Vendor
    'ngRoute',
    'ngSanitize',

    // Routes / components
    'word-to-markdown.routes',
    'word-to-markdown.get-content',
    'word-to-markdown.markdown-converter',
    'word-to-markdown.translations'
  ])
      .config(debugLogging);

  /**
   * @param {angular.$logProvider} $logProvider
   */
  function debugLogging($logProvider) {
    // set debug logging to on
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }

  /**
   * Start the Angular app
   */
  function bootstrap() {
    angular.bootstrap(document.getElementById('container'), [appName]);
  }

  // when Office has initalized, manually bootstrap the app
  Office.initialize = function(){
    console.log('>>> Office.initialize()');
    officeInitialised = true;
    bootstrap();
  };

  // When run in a browser, the app won't automatically initialise
  // To work around this, we can expose a manual way of starting the app if we haven't been initialised after a set time
  setTimeout(function() {
    if (!officeInitialised) {
      console.error('App wasn\'t initialised in time. Use `window.wordToMarkDown.start` to manually bootstrap the application');
    }

    window.wordToMarkDown = window.wordToMarkDown || {};
    window.wordToMarkDown.start = bootstrap;
  }, initialisationMaxTime);

})(window.Office, window.angular);
