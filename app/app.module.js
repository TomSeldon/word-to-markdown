(function(Office, angular){
  'use strict';

  angular.module('word-to-markdown', [
      // Vendor
      'ngRoute',
      'ngSanitize',

      // Routes / components
      'word-to-markdown.routes',
      'word-to-markdown.get-content',
      'word-to-markdown.markdown-converter'
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

  // when Office has initalized, manually bootstrap the app
  Office.initialize = function(){
    console.log('>>> Office.initialize()');
    angular.bootstrap(jQuery('#container'), ['word-to-markdown']);
  };
})(window.Office, window.angular);
