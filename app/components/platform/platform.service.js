(function(angular, Office) {
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
     * @returns {boolean}
     */
    PlatformService.prototype.isRunningInBrowser = function() {
        return typeof Office.context.document === 'undefined';
    };

    /**
     * @returns {boolean}
     */
    PlatformService.prototype.isRunningInOffice = function() {
        return typeof Office.context.document !== 'undefined';
    };
})(window.angular, window.Office);
