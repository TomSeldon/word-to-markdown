(function(angular) {
    'use strict';

    /**
     * @filedesc Creates a service that is capable of accessing the document content (currently just as OOXML).
     *
     * A public `getContent` service is registered which delegates to a `getContentBackend` provider. This is done so that
     * we can have environment specific implementations without changing the service, or having to inject different services
     * to consumers.
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
     * @param {GetContentBackendOfficeService|GetContentBackendBrowserService} getContentBackend
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
    GetContentService.prototype.getDocumentAsHtml = function() {
        return this._getContentBackend.getDocumentAsHtml.apply(this._getContentBackend, arguments);
    };

    /**
     * Load different backends so we can run this in Office environment and stub the response when running in a browser
     */
    function getContentBackendProvider() {
        /**
         * @param {PlatformService} platform
         * @param {angular.$q} $q
         * @returns {*}
         */
        this.$get = function(platform, $q) {
            if (platform.isRunningInOffice()) {
                return new GetContentBackendOfficeService($q);
            } else {
                return new GetContentBackendBrowserService($q);
            }
        };
    }

    /**
     * @class GetContentBackendOfficeService
     * @constructor
     *
     * @param {angular.$q} $q
     */
    function GetContentBackendOfficeService($q) {
        /**
         * @type {angular.$q}
         * @private
         */
        this._$q = $q;
    }

    /**
     * @returns {Promise.<string>} HTML representation of the entire Word document
     */
    GetContentBackendOfficeService.prototype.getDocumentAsHtml = function() {
        var deferred = this._$q.defer();
        var coercion = Office.CoercionType.Html;
        var options = { valueFormat: "unformatted", filterType: "all" };

        Office.context.document.getSelectedDataAsync(coercion, options,
            function (asyncResult) {
                var error = asyncResult.error;
                if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                    deferred.reject(error.name + ": " + error.message)
                }
                else {
                    // Resolve selected data.
                    deferred.resolve(asyncResult.value);
                }
            });

        return  deferred.promise;
    };

    /**
     * @class GetContentBackendBrowserService
     * @constructor
     *
     * @param {angular.$q} $q
     */
    function GetContentBackendBrowserService($q) {
        /**
         * @type {angular.$q}
         * @private
         */
        this._$q = $q;
    }

    /**
     * @returns {Promise.<string>} Mock HTML representation of the entire Word document
     */
    GetContentBackendBrowserService.prototype.getDocumentAsHtml = function() {
        return this._$q.when('HTML content');
    };
})(window.angular);
