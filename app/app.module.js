(function() {
  'use strict';

  var officeInitialised = false;

  // Max time in ms before we report error that we haven't started
  var initialisationMaxTime = 3000;

  angular.module('word-to-markdown', [
    // Vendor
    'ngAnimate',
    'ngSanitize',

    // Components
    'word-to-markdown.get-content',
    'word-to-markdown.markdown-converter',
    'word-to-markdown.translations',

    // States
    'word-to-markdown.states.home',
    'word-to-markdown.states.output'
  ])
    .run(goToInitialState)
    .config(debugLogging);

  /**
   * @param {ui.router.$state} $state - Service for transitioning between UI states
   *
   * @returns {undefined}
   */
  function goToInitialState($state) {
    $state.go('home');
  }

  /**
   * @param {angular.$logProvider} $logProvider - Provider for configuring log service
   *
   * @returns {undefined}
   */
  function debugLogging($logProvider) {
    // set debug logging to on
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }

  /**
   * Start the Angular app
   *
   * @returns {undefined}
   */
  function bootstrap() {
    angular.bootstrap(document.getElementById('container'), ['word-to-markdown']);
  }

  // when Office has initalized, manually bootstrap the app
  Office.initialize = function() {
    console.log('>>> Office.initialize()');
    officeInitialised = true;
    bootstrap();
  };

  // When run in a browser, the app won't automatically initialise
  // To work around this, we can expose a manual way of starting the app if we haven't been initialised after a set time
  setTimeout(function() {
    if (!officeInitialised) {
      console.error(
        'App wasn\'t initialised in time. Use `window.wordToMarkDown.start` to manually bootstrap the application'
      );
    }

    window.wordToMarkDown = window.wordToMarkDown || {};
    window.wordToMarkDown.start = bootstrap;
  }, initialisationMaxTime);
})();
