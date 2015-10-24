(function() {
  'use strict';

  angular.module('word-to-markdown.platform', [])
    .service('platform', PlatformService);

  /**
   * @class PlatformService
   * @constructor
   */
  function PlatformService() {
  }

  /**
   * @returns {boolean} Returns true if not running in a Microsoft Office environment
   */
  PlatformService.prototype.isRunningInBrowser = function() {
    return !this.isRunningInOffice();
  };

  /**
   * @returns {boolean} Returns true if we're running in a Microsoft Office environment
   */
  PlatformService.prototype.isRunningInOffice = function() {
    var hasContext = typeof Office.context !== 'undefined';

    return hasContext && typeof Office.context.document !== 'undefined';
  };
})();
