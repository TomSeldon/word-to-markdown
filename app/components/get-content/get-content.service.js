(function() {
  'use strict';

  /**
   * @filedesc Creates a service that is capable of accessing the document content (currently just as OOXML).
   *
   * A public `getContent` service is registered which delegates to a `getContentBackend` provider. This is done so that
   * we can have environment specific implementations without changing the service, or having to inject different
   * services to consumers.
   *
   * The result is that when running in Office, we can use the 'real' implementation by providing a `getContentBackend`
   * that uses the Office API(s), but when running in a browser based environment (e.g. for development or unit testing)
   * we can swap out the backend for one with the same contract but returns some mock data.
   */

  angular.module('word-to-markdown.get-content', [
    'word-to-markdown.platform'
  ])
    .service('getContent', GetContentService)
    .provider('getContentBackend', getContentBackendProvider);

  /**
   * @class {GetContentService}
   * @param {GetContentBackendOfficeService|GetContentBackendBrowserService} getContentBackend - Backend
   * @constructor
   */
  function GetContentService(getContentBackend) {
    /**
     * @type {GetContentBackendOfficeService|GetContentBackendBrowserService}
     * @private
     */
    this._getContentBackend = getContentBackend;
  }

  /**
   * Call through to the getContentBackend implementation, which will differ per platform
   *
   * @returns {Promise.<string>} HTML representation of the entire Word document
   */
  GetContentService.prototype.getSelectedTextAsHtml = function() {
    return this._getContentBackend.getSelectedTextAsHtml.apply(this._getContentBackend, arguments);
  };

  /**
   * Load different backends so we can run this in Office environment and stub the response when running in a browser
   * @returns {undefined}
   */
  function getContentBackendProvider() {
    /**
     * @param {PlatformService} platform - Service that exposes methods for checking the platform we're running on
     * @param {angular.$q} $q - Service for working with promises
     * @returns {GetContentBackendOfficeService|GetContentBackendBrowserService} Backend implementation
     */
    this.$get = function(platform, $q) {
      var backend;

      if (platform.isRunningInOffice()) {
        backend = new GetContentBackendOfficeService($q);
      } else {
        backend = new GetContentBackendBrowserService($q);
      }

      return backend;
    };
  }

  /**
   * @class GetContentBackendOfficeService
   * @constructor
   *
   * @param {angular.$q} $q - Service for working with promises
   */
  function GetContentBackendOfficeService($q) {
    /**
     * @type {angular.$q}
     * @private
     */
    this._$q = $q;
  }

  /**
   * @returns {Promise.<string>} HTML representation of the selected text
   */
  GetContentBackendOfficeService.prototype.getSelectedTextAsHtml = function() {
    var deferred = this._$q.defer();
    var coercion = Office.CoercionType.Html;
    var options = {valueFormat: 'unformatted', filterType: 'all'};

    Office.context.document.getSelectedDataAsync(coercion, options, _onGettingSelectedData);

    /**
     * @param {{error: *, value: *}} result - The result of trying to get the selected data from the Word document
     * @private
     * @returns {undefined}
     */
    function _onGettingSelectedData(result) {
      var error = result.error;

      if (result.status === Office.AsyncResultStatus.Failed) {
        deferred.reject(error.name + ': ' + error.message);
      } else {
        // Resolve selected data.
        deferred.resolve(result.value);
      }
    }

    return deferred.promise;
  };

  /**
   * @class GetContentBackendBrowserService
   * @constructor
   *
   * @param {angular.$q} $q - Service for working with promises
   */
  function GetContentBackendBrowserService($q) {
    /**
     * @type {angular.$q}
     * @private
     */
    this._$q = $q;
  }

  /**
   * @returns {Promise.<string>} Mock HTML representation of the selected text
   */
  GetContentBackendBrowserService.prototype.getSelectedTextAsHtml = function() {
    return this._$q.when('<h1>HTML content</h1>');
  };
})();
