/// <reference path="../../_references.d.ts" />
module W2MD.Components.Translations {
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
            'w2md.convert-selection': 'Convert selection',
            'w2md.convert-selection-to-markdown': 'Convert selection to markdown',
            'w2md.converted-selection-to-markdown': 'Converted selection to markdown',
            'w2md.click-to-convert': 'Click the button below to convert the selected text to Markdown.',
            'w2md.intro-to-markdown': 'Markdown is a widely used syntax that is used for a variety of different purposes, ' +
            'from blogging platforms to project documentation.',
            'w2md.wont-change-document': 'Note that this will not change your original document.',
            'w2md.conversion-complete-message': 'The markdown version of your selection is shown below. Note that this ' +
            'does not live update as you make further changes to your document. You\'ll need to do this again if you ' +
            'make any additional changes.',
            'w2md.back-to-start': 'Go back to the start',

            // errors
            'w2md.error.unsupported-version-of-word': 'This version of Word is not supported by this add-in. Please use the Windows desktop version of Word.',
            'w2md.error.unknown-conversion-error': 'An unknown error occurred whilst trying to convert your selection to markdown.'
        });

        $translateProvider.preferredLanguage('en');
    }
}
