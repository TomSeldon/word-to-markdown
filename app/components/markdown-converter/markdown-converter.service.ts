/// <reference path="../../_references.d.ts" />
/* global upndown:false */
/* eslint-disable new-cap */
/* eslint-disable angular/document-service */
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
        // We get a lot of superfluous DOM from the Office API that results in unwanted output
        // e.g. style content tags as comments
        // For now, we can workaround this by cleaning the outputted HTML before converting it to markdown
        html = _this._cleanHtml(html);

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

  /**
   * todo: Implement way of getting clean DOM without relying on coupling to undocumented implementation detail
   *
   * The DOM we get back for the selected text isn't a partial HTML fragment, but a full HTML document complete with
   * <head>, style elements, <body>, etc. This results in some junk content when converting to markdown.
   *
   * To workaround this, rather than convert the entire DOM we can instead target the specific element that contains
   * the HTML representation of the selected text. This works just fine, but means we're coupled do an undocumented
   * implementation detail of Office 365 and so it could break in the future.
   *
   * @param {string} html - HTML document from Word
   * @returns {string} - A subset of the original HTML, i.e. just the content section without <head> etc.
   * @private
   */
  MarkdownConverterService.prototype._cleanHtml = function(html) {
    var div = document.createElement('div');

    div.innerHTML = html;

    return angular.element(div).find('.WordSection1').html();
  };
})();
