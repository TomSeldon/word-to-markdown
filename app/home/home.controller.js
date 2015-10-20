(function(angular) {
  'use strict';

  angular.module('word-to-markdown.states.home', [])
      .controller('HomeController', HomeController);

  /**
   * Controller constructor
   *
   * @param {GetContentService} getContent
   * @param {MarkdownConverterService} markdownConverter
   */
  function HomeController() {
    // todo: Implement
  }

  /**
   * Try to convert the Word document to Markdown and save the result as a property on the view-model.
   */
  HomeController.prototype.convertDocument = function() {
    var _this = this;

    this._isLoading = true; // set as loading
    this.markdown = ''; // reset converted markdown

    this._getContent.getDocumentAsOoxml()
        .then(function(ooxml) {
          _this.markdown = _this._markdownConverter.convertFromOoxml(ooxml);
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
