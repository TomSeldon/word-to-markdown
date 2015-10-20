(function(angular) {
    'use strict';

    angular.module('word-to-markdown.get-content', [])
        .service('getContent', GetContentService);

    /**
     * @class GetContentService
     * @constructor
     */
    function GetContentService() {
    }

    /**
     * @returns {string} HTML representation of the entire Word document
     */
    GetContentService.prototype.getDocumentAsHtml = function() {
        // todo: implement
        return  '';
    };
})(window.angular);
