(function(angular) {
    angular.module('word-to-markdown.translations', [
        'pascalprecht.translate'
    ])
        .config(registerTranslations);

    /**
     * @param {$translateProvider} $translateProvider
     */
    function registerTranslations($translateProvider) {
        $translateProvider.translations('en', {
            'w2md.convert-document': 'Convert',
            'w2md.convert-document-to-markdown': 'Convert document to markdown',
            'w2md.click-to-convert': 'Click the button below to convert your Word document to Markdown.',
            'w2md.intro-to-markdown': 'Markdown is a widely used syntax that is used for a variety of different purposes, ' +
                'from blogging platforms to project documentation.',
            'w2md.wont-change-document': 'Note that this will not change your original document.'
        });

        $translateProvider.preferredLanguage('en');
    }
})(window.angular);