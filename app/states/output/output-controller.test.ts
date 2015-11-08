/// <reference path="../../_references.d.ts" />
/// <reference path="output-controller.ts" />
describe('output controller', () => {
    let createController:Function;
    let outputController:W2MD.States.Output.OutputController;
    let markdown:string;

    beforeEach(angular.mock.module('word-to-markdown.states.output'));

    beforeEach(angular.mock.inject($injector => {
        createController = function () {
            const $controller = $injector.get('$controller');

            return $controller('OutputController', {
                output: markdown
            });
        };

        markdown = '# some test content';
        outputController = createController();
    }));

    it('should expose the generated markdown', () => {
        expect(outputController.markdown).toBe(markdown);
    });
});
