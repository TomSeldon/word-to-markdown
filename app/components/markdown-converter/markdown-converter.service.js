(function(angular) {
    'use strict';

    angular.module('word-to-markdown.markdown-converter', [])
        .service('markdownConverter', MarkdownConverterService);

    /**
     * @class MarkdownConverterService
     * @constructor
     *
     * @param {angular.$q} $q
     * @param {GetContentService} getContent
     */
    function MarkdownConverterService($q, getContent) {
        /**
         * @type {angular.$q}
         * @private
         */
        this._$q = $q;

        /**
         * @type {GetContentService}
         * @private
         */
        this._getContent = getContent;
    }

    /**
     * Converts the selected text within the Word document to markdown.
     *
     * @returns {Promise.<string>}
     */
    MarkdownConverterService.prototype.convertSelectedText = function() {
        var _this = this;

        return this._getContent.getSelectedTextAsHtml()
            .then(function(html) {
                return _this.convertFromHtml(html);
            });
    };

    /**
     * @param {string} html
     * @returns {string} Markdown representation of HTML
     */
    MarkdownConverterService.prototype.convertFromHtml = function(html) {
        var deferred = this._$q.defer();
        var und = new upndown();

        und.convert(html, function(error, markdown) {
            if (error) {
                deferred.reject(error);
                return;
            }

            deferred.resolve(markdown);
        });

        return deferred.promise;
    };
})(window.angular);
