/* global upndown:false */
/* eslint-disable new-cap */
(function() {
  'use strict';

  angular.module('word-to-markdown.markdown-converter', [
    'word-to-markdown.get-content'
  ])
    .service('markdownConverter', MarkdownConverterService);

  /**
   * @class MarkdownConverterService
   * @constructor
   *
   * @param {angular.$q} $q - Service for working with Promises within Angular
   * @param {GetContentService} getContent - Service for getting content from the Word document
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
   * @returns {Promise.<string>} Promise that resolves to markdown representation of selected text
   */
  MarkdownConverterService.prototype.convertSelectedText = function() {
    var _this = this;

    return this._getContent.getSelectedTextAsHtml()
      .then(function(html) {
        return _this.convertFromHtml(html);
      });
  };

  /**
   * @param {string} html - HTML representation of Word document text
   * @returns {Promise.<string>} Markdown representation of HTML
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
})();
