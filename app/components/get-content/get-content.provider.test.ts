/// <reference path="get-content.provider.ts" />
/// <reference path="get-content-backend-office-service.ts" />
/// <reference path="get-content-backend-office-service.ts" />
describe('get content provider', () => {
    let isBrowser;
    let isOffice;
    let getContent;

    beforeEach(angular.mock.module('word-to-markdown.get-content'));

    beforeEach(angular.mock.module(($provide) => {
        $provide.factory('platform', () => {
            return {
                isRunningInBrowser: () => {
                    return isBrowser;
                },

                isRunningInOffice: () => {
                    return isOffice;
                }
            };
        });
    }));

    describe('when running in a browser environment', () => {
        beforeEach(() => {
            isBrowser = true;
            isOffice = false;
        });

        beforeEach(angular.mock.inject(($injector) => {
            getContent = $injector.get('getContent');
        }));

        it('should return a backend suitable for use in a browser', () => {
            expect(getContent instanceof GetContentBackendBrowserService).toBe(true);
        });
    });

    describe('when running in an Office environment', () => {
        beforeEach(() => {
            isBrowser = false;
            isOffice = true;
        });

        beforeEach(angular.mock.inject(($injector) => {
            getContent = $injector.get('getContent');
        }));

        it('should return a backend suitable for use in Office', () => {
            expect(getContent instanceof GetContentBackendOfficeService).toBe(true);
        });
    });
});
