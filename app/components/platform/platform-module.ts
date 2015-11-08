/// <reference path="../../_references.d.ts" />
/// <reference path="platform-service-interface.ts" />
/// <reference path="platform-service.ts" />
(function () {
    'use strict';

    angular.module('word-to-markdown.platform', [
        'word-to-markdown.office'
    ])
        .service('platform', PlatformService);
})();
