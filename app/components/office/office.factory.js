(function() {
  'use strict';

  angular.module('word-to-markdown.office', [])
    .factory('office', officeFactory);

  /**
   * @param {angular.$window} $window - Wrapper around window
   * @returns {Office|undefined} The Office JS API
   */
  function officeFactory($window) {
    return $window.Office || null;
  }
})();
