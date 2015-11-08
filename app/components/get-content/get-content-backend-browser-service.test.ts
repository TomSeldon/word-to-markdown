/// <reference path="get-content-backend-browser-service.ts" />
describe('get content backend: browser', () => {
    let getContentBackendBrowserService:W2MD.Components.GetContent.GetContentBackendBrowserService;
    let $rootScope:angular.IRootScopeService;

    beforeEach(angular.mock.inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        getContentBackendBrowserService = new W2MD.Components.GetContent.GetContentBackendBrowserService($injector.get('$q'));
    }));

    describe('getting selected text', () => {
        it('should expose some sample HTML', () => {
            const callback = jasmine.createSpy('callback');

            getContentBackendBrowserService.getSelectedTextAsHtml().then(callback);
            $rootScope.$apply();

            expect(callback).toHaveBeenCalledWith(jasmine.any(String));
        });
    });
});
