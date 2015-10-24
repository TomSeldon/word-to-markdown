/* eslint-disable angular/document-service */
/* eslint-disable angular/log */
/* eslint-disable angular/timeout-service */
/* eslint-disable angular/window-service */
(function() {
  'use strict';

  var officeInitialised = false;

  // Max time in ms before we report error that we haven't started
  var initialisationMaxTime = 3000;

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
