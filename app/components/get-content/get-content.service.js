(function(angular) {
    'use strict';

    angular.module('word-to-markdown.get-content', [
        'word-to-markdown.platform'
    ])
        .provider('getContent', getContentProvider);

    /**
     * Load different backends so we can run this in Office environment and stub the response when running in a browser
     */
    function getContentProvider() {
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
     * @returns {Promise.<string>} OOXML representation of the entire Word document
     */
    GetContentBackendOfficeService.prototype.getDocumentAsOoxml = function() {
        var deferred = this._$q.defer();
        var coercion = Office.CoercionType.Ooxml;
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
     * @returns {Promise.<string>} Mock OOXML representation of the entire Word document
     */
    GetContentBackendBrowserService.prototype.getDocumentAsOoxml = function() {
        return this._$q.when('ooxml content');
    };
})(window.angular);
