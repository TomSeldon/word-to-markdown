/* eslint-disable angular/document-service */
/* eslint-disable angular/log */
/* eslint-disable angular/timeout-service */
/* eslint-disable angular/window-service */
(function() {
  'use strict';

  var officeInitialised = false;
  var appInitialised = false;
  var maxInitialisationTime = 3000;

  // Expose bootstrap function so app can be manually started
  window.w2md = window.w2md || {};
  window.w2md.bootstrap = bootstrap;

  // Try to bootstrap the app with Office.
  // This will never get called if we're running in a non-Office
  // environment, such as when developing in a browser.
  bootstrapForOffice();

  // In the case where Office hasn't initialised and we still
  // need to bootstrap the app, e.g. when developing in a browser,
  // expose the bootstrapping function so it can be triggered manually
  setTimeout(function() {
    if (officeInitialised || appInitialised) {
      return;
    }

    console.info(`word-to-markdown didn't start because Office was not initialised.
    To manually start word-to-mark down, run 'w2md.bootstrap()'`);
  }, maxInitialisationTime);

  /**
   * Start the Angular app
   */
  function bootstrap() {
    appInitialised = true;
    angular.bootstrap(document.getElementById('container'), ['word-to-markdown']);
  }

  /**
   * Bootstrapping function for when running in a browser
   */
  function bootstrapForBrowser() {
    angular.element(document).ready(bootstrap);
  }

  /**
   * Bootstrapping function for when running in Microsoft Office
   */
  function bootstrapForOffice() {
    // when Office has initalized, manually bootstrap the app
    Office.initialize = function() {
      console.log('>>> Office.initialize()');
      officeInitialised = true;
      bootstrap();
    };
  }
})();
