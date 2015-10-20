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
            'w2md.convert-document-to-markdown': 'Convert document to markdown'
        });

        $translateProvider.preferredLanguage('en');
    }
})(window.angular);