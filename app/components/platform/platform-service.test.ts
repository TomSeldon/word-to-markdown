/// <reference path="../../_references.d.ts" />
/// <reference path="platform-service-interface.ts" />
describe('platform service', () => {
    let platform:W2MD.Components.Platform.IPlatformService;

    beforeEach(angular.mock.module('word-to-markdown.platform'));

    describe('when running in a browser', () => {
        beforeEach(angular.mock.module($provide => {
            $provide.value('office', {
                context: {
                    document: undefined
                }
            });
        }));

        beforeEach(angular.mock.inject($injector => {
            platform = $injector.get('platform');
        }));

        it('should not say we are running in an Office environment', () => {
            expect(platform.isRunningInOffice()).toBe(false);
        });

        it('should say we are running in a browser', () => {
            expect(platform.isRunningInBrowser()).toBe(true);
        });
    });

    describe('when running in an Office environment', () => {
        beforeEach(angular.mock.module($provide => {
            $provide.value('office', {
                context: {
                    document: {}
                }
            });
        }));

        beforeEach(angular.mock.inject($injector => {
            platform = $injector.get('platform');
        }));

        it('should say we are running in an Office environment', function () {
            expect(platform.isRunningInOffice()).toBe(true);
        });

        it('should not say we are running in a browser', function () {
            expect(platform.isRunningInBrowser()).toBe(false);
        });
    });
});
