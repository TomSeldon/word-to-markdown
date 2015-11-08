/// <reference path="../../_references.d.ts" />
/// <reference path="../../components/get-content/get-content-service-interface.ts" />
/// <reference path="home-controller.ts" />
describe('home controller', () => {
    let $q:angular.IQService;
    let $rootScope:angular.IRootScopeService;
    let createController:Function;
    let homeController:W2MD.States.Home.HomeController;
    let getContent:W2MD.Components.GetContent.IGetContentService;

    beforeEach(angular.mock.module('word-to-markdown.states.home'));
    beforeEach(angular.mock.module('word-to-markdown.states.output'));

    beforeEach(inject($injector => {
        createController = () => {
            const $controller = $injector.get('$controller');

            return $controller('HomeController');
        };

        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
        getContent = $injector.get('getContent');
        homeController = createController();
    }));

    describe('when requesting to convert the document to markdown', () => {
        let $state;

        beforeEach(inject($injector => {
            const $q = $injector.get('$q');

            $state = $injector.get('$state');

            spyOn($state, 'go').and.callThrough();
        }));

        it('should try to take the user to the output state', () => {
            homeController.convertSelection();

            expect($state.go).toHaveBeenCalledWith('output');
        });

        it('should hide the convert button after it is pressed', () => {
            homeController.convertSelection();
            expect(homeController.shouldShowConvertButton()).toBe(false);
        });

        it('should allow the convert button to be shown after a successful conversion', () => {
            $state.go.and.returnValue($q.when());

            homeController.convertSelection();
            $rootScope.$apply();

            expect(homeController.shouldShowConvertButton()).toBe(true);
        });

        it('should hide the conversion button if the conversion fails due to an unsupported coercion type error', () => {
            spyOn(getContent, 'getSelectedTextAsHtml').and.returnValue($q.reject({
                name: 'Invalid Coercion Type',
                message: 'The specified coercion type is not supported.'
            }));

            homeController.convertSelection();
            $rootScope.$apply();

            expect(homeController.shouldShowConvertButton()).toBe(false);
        });

        it('should output error information when a conversion fails', () => {
            spyOn(getContent, 'getSelectedTextAsHtml').and.returnValue($q.reject({
                name: 'Invalid Coercion Type',
                message: 'The specified coercion type is not supported.'
            }));

            homeController.convertSelection();
            $rootScope.$apply();

            expect(homeController.hasError()).toBe(true);
            expect(homeController.errorMessage).toEqual(jasmine.any(String));
        });
    });
});
