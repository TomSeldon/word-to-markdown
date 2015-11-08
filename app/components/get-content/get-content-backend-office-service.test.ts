/// <reference path="get-content-backend-office-service.ts" />
describe('get content backend: office', () => {
    let getContentBackendOfficeService;
    let $rootScope;
    let office;

    beforeEach(angular.mock.module(($provide) => {
        $provide.value('office', {
            AsyncResultStatus: {
                Failed: 'Failed'
            },

            CoercionType: {
                Html: 'Html'
            },

            context: {
                document: {
                    getSelectedDataAsync: angular.noop
                }
            }
        })
    }));

    beforeEach(angular.mock.inject(($injector) => {
        let $q = $injector.get('$q');

        office = $injector.get('office');
        $rootScope = $injector.get('$rootScope');

        getContentBackendOfficeService = new GetContentBackendOfficeService($q, office);
    }));

    describe('getting selected text', () => {
        beforeEach(angular.mock.inject(($injector) => {
            let $q = $injector.get('$q');

            office.context.document.getSelectedDataAsync = jasmine.createSpy('getSelectedDataAsync').and.callFake((coercion, options, callback) => {
                const result = {
                    value: `
                        <html>
                            <body>
                                <div class="WordSection1">
                                    <h2>Some selected content</h2>
                                </div>
                            </body>
                        </html>`
                };

                callback(result);
            });
        }));

        it('should call the office API with a coercion type of HTML', () => {
            getContentBackendOfficeService.getSelectedTextAsHtml();
            $rootScope.$apply();

            let callArgs = office.context.document.getSelectedDataAsync.calls.argsFor(0);

            expect(callArgs[0]).toBe('Html');
        });

        it('should expose the HTML of the selected text, returned by the office API', () => {
            const callback = jasmine.createSpy('callback');

            getContentBackendOfficeService.getSelectedTextAsHtml().then(callback);
            $rootScope.$apply();

            expect(callback).toHaveBeenCalledWith('<h2>Some selected content</h2>');
        });
    });

    describe('when getting the selected text fails', () => {
        beforeEach(angular.mock.inject(($injector) => {
            let $q = $injector.get('$q');

            office.context.document.getSelectedDataAsync = jasmine.createSpy('getSelectedDataAsync').and.callFake((coercion, options, callback) => {
                const result = {
                    status: office.AsyncResultStatus.Failed,
                    error: {
                        name: 'Error name',
                        message: 'Error description'
                    }
                };

                callback(result);
            });
        }));

        it('should return a rejected promise with the error', () => {
            const success = jasmine.createSpy('success');
            const fail = jasmine.createSpy('fail');

            getContentBackendOfficeService.getSelectedTextAsHtml()
                .then(success)
                .catch(fail);
            $rootScope.$apply();

            expect(success).not.toHaveBeenCalled();
            expect(fail).toHaveBeenCalledWith('Error name: Error description');
        });
    });
});
