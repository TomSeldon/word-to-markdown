/// <reference path="get-content-backend-browser-service.ts" />
describe('get content backend: browser', () => {
    let getContentBackendBrowserService;
    let $rootScope;

    beforeEach(angular.mock.inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        getContentBackendBrowserService = new GetContentBackendBrowserService($injector.get('$q'));
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
