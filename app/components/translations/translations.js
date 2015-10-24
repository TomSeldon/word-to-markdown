(function() {
  'use strict';

  angular.module('word-to-markdown.translations', [
    'pascalprecht.translate'
  ])
    .config(registerTranslations);

  /**
   * @param {$translateProvider} $translateProvider - Provider for registering translations
   * @returns {undefined}
   */
  function registerTranslations($translateProvider) {
    $translateProvider.translations('en', {
      'w2md.convert-document': 'Convert',
      'w2md.convert-document-to-markdown': 'Convert document to markdown',
      'w2md.converted-document-to-markdown': 'Converted document to markdown',
      'w2md.click-to-convert': 'Click the button below to convert your Word document to Markdown.',
      'w2md.intro-to-markdown': 'Markdown is a widely used syntax that is used for a variety of different purposes, ' +
      'from blogging platforms to project documentation.',
      'w2md.wont-change-document': 'Note that this will not change your original document.',
      'w2md.conversion-complete-message': 'The markdown version of your Word document is shown below. Note that this ' +
      'does not live update as you make further changes to your document. You\'ll need to do this again if you ' +
      'make any additional changes.',
      'w2md.back-to-start': 'Go back to the start'
    });

    $translateProvider.preferredLanguage('en');
  }
})();
