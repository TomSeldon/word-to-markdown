/// <reference path="../../_references.d.ts" />
/// <reference path="get-content-service-interface.ts" />
/// <reference path="get-content-backend-browser-service.ts" />
/// <reference path="get-content-backend-office-service.ts" />
(function() {
  'use strict';

  /**
   * @filedesc Creates a service that is capable of accessing the document content (currently just as HTML).
   *
   * We create a provider that exposes a platform appropriate service for accessing content.
   *
   * The result is that when running in Office, we can use the 'real' implementation by providing a service
   * that uses the Office API(s), but when running in a browser based environment (e.g. for development or unit testing)
   * we can swap out the backend for one with the same contract but returns some mock data.
   */

  angular.module('word-to-markdown.get-content', [
    'word-to-markdown.platform'
  ])
    .provider('getContent', getContentBackendProvider);

  /**
   * Load different backends so we can run this in Office environment and stub the response when running in a browser
   * @returns {Function}
   */
  function getContentBackendProvider() {
    return {
      /**
       * @param {PlatformService} platform - Service that exposes methods for checking the platform we're running on
       * @param {Office} office - Office JS API
       * @param {angular.$q} $q - Service for working with promises
       * @returns {IGetContentService} Backend implementation
       */
      $get: function(platform, office, $q) {
        let backend;

        if (platform.isRunningInOffice()) {
          backend = new GetContentBackendOfficeService($q, office);
        } else {
          backend = new GetContentBackendBrowserService($q);
        }

        return backend;
      }
    };
  }
})();
