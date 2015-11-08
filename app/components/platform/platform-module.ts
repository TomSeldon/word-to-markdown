/// <reference path="../../_references.d.ts" />
/// <reference path="platform-service-interface.ts" />
/// <reference path="platform-service.ts" />
module W2MD.Components.Platform {
    angular.module('word-to-markdown.platform', [
        'word-to-markdown.office'
    ])
        .service('platform', PlatformService);
}
