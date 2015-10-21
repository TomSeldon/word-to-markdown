(function(angular) {
    'use strict';

    angular.module('word-to-markdown.markdown-converter', [])
        .service('markdownConverter', MarkdownConverterService);

    /**
     * @class MarkdownConverterService
     * @constructor
     *
     * @param {GetContentService} getContent
     */
    function MarkdownConverterService(getContent) {
        /**
         * @type {GetContentService}
         * @private
         */
        this._getContent = getContent;
    }

    /**
     * Converts the full Word document to Markdown syntax
     *
     * @returns {Promise.<string>}
     */
    MarkdownConverterService.prototype.convertDocumentToMarkdown = function() {
        var _this = this;

        return this._getContent.getDocumentAsHtml()
            .then(function(html) {
                var t = _this.convertFromHtml(html);
                console.log(t);
                return t;
            });
    };

    /**
     * @param {string} html
     * @returns {string} Markdown representation of HTML
     */
    MarkdownConverterService.prototype.convertFromHtml = function(html) {
        return toMarkdown(html);
    };
})(window.angular);
