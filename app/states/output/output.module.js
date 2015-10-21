(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.output', [
        'ui.router',
        'word-to-markdown.states.output.controller'
    ])
        .config(routeConfigurator);

    /**
     * @param {ui.router.$stateProvider} $stateProvider
     */
    function routeConfigurator($stateProvider) {
        $stateProvider.state('output', {
            url: '/output',
            templateUrl: 'app/states/output/output.html',
            controller: 'OutputController as vm',
            resolve: {
                output: getMarkdownForPage
            }
        });
    }

    /**
     * @param markdownConverter
     * @returns {Promise.<string>}
     */
    function getMarkdownForPage(markdownConverter) {
        return markdownConverter.convertDocumentToMarkdown();
    }
})(window.angular);
