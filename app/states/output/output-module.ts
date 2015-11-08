/// <reference path="../../_references.d.ts" />
/// <reference path="output-controller.ts" />
module W2MD.States.Output {
    angular.module('word-to-markdown.states.output', [
        'ui.router',
        'word-to-markdown.markdown-converter'
    ])
        .controller('OutputController', W2MD.States.Output.OutputController)
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
}
