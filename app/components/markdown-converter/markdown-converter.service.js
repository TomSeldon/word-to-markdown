(function(angular) {
    'use strict';
    
    angular.module('word-to-markdown.markdown-converter', [])
        .service('markdownConverter', MarkdownConverterService);

    /**
     * @class MarkdownConverterService
     * @constructor
     */
    function MarkdownConverterService() {
    }

    /**
     * @param {string} html
     * @returns {string} Markdown representation of HTML
     */
    MarkdownConverterService.prototype.convertFromOoxml = function(html) {
        // todo: implement
        return '#some markdown';
    };
})(window.angular);
