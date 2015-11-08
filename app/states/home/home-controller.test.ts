/// <reference path="../../_references.d.ts" />
/// <reference path="home-controller.ts" />
describe('home controller', () => {
    let createController:Function;
    let homeController:W2MD.States.Home.HomeController;

    beforeEach(angular.mock.module('word-to-markdown.states.home'));

    beforeEach(inject($injector => {
        createController = () => {
            const $controller = $injector.get('$controller');

            return $controller('HomeController');
        };

        homeController = createController();
    }));

    describe('when requesting to convert the document to markdown', () => {
        let $state;

        beforeEach(inject($injector => {
            const $q = $injector.get('$q');

            $state = $injector.get('$state');

            spyOn($state, 'go').and.returnValue($q.when());
        }));

        it('should try to take the user to the output state', () => {
            homeController.convertSelection();

            expect($state.go).toHaveBeenCalledWith('output');
        });

        it('should hide the convert button after it is pressed', () => {
            homeController.convertSelection();
            expect(homeController.shouldShowConvertButton()).toBe(false);
        });
    });
});
