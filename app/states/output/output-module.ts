/// <reference path="../../_references.d.ts" />
/// <reference path="output-controller.ts" />
(function () {
    'use strict';

    angular.module('word-to-markdown.states.output', [
        'ui.router'
    ])
        .controller('OutputController', OutputController)
        .config(routeConfigurator);

    /**
     * @param {ui.router.$stateProvider} $stateProvider - Provider for registering UI states
     * @returns {undefined}
     */
    function routeConfigurator($stateProvider) {
        $stateProvider.state('output', {
            templateUrl: 'app/states/output/output.html',
            controller: 'OutputController as vm',
            resolve: {
                output: getMarkdownForSelectedText
            }
        });
    }

    /**
     * @param {MarkdownConverterService} markdownConverter - Service for converting data to markdown
     * @returns {Promise.<string>} The markdown representation of the selected text
     */
    function getMarkdownForSelectedText(markdownConverter) {
        return markdownConverter.convertSelectedText();
    }
})();
