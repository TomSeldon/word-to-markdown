(function(angular) {
  'use strict';

  angular.module('word-to-markdown.states.home', [])
      .controller('HomeController', HomeController);

  /**
   * Home Controller constructor
   *
   * @param {MarkdownConverterService} markdownConverter
   */
  function HomeController(markdownConverter) {
    /**
     * @type {MarkdownConverterService}
     * @private
     */
    this._markdownConverter = markdownConverter;

    /**
     * @type {boolean}
     * @private
     */
    this._isLoading = false;

    /**
     * @type {string}
     */
    this.markdown = '';
  }

  /**
   * Try to convert the Word document to Markdown and save the result as a property on the view-model.
   */
  HomeController.prototype.convertDocument = function() {
    var _this = this;

    this._isLoading = true; // set as loading
    this.markdown = ''; // reset converted markdown

    this._markdownConverter.convertDocumentToMarkdown()
      .then(function(markdown) {
        _this.markdown = markdown;
      })
      .catch(function(error) {
        // todo: handle error
      })
      .finally(function() {
        _this._isLoading = false;
      });
  };

  /**
   * @returns {boolean}
   */
  HomeController.prototype.shouldShowConvertButton = function() {
    var notLoading = this._isLoading === false;

    return Boolean(notLoading);
  };
})(window.angular);
