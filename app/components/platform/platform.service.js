(function() {
  'use strict';

  angular.module('word-to-markdown.platform', [
    'word-to-markdown.office'
  ])
    .service('platform', PlatformService);

  /**
   * @class PlatformService
   * @constructor
   *
   * @param {Office} office - Microsoft Office JS API
   */
  function PlatformService(office) {
    /**
     * @type {Office}
     * @private
     */
    this._office = office;
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
    var hasContext = this._office && typeof this._office.context !== 'undefined';

    return hasContext && typeof this._office.context.document !== 'undefined';
  };
})();
