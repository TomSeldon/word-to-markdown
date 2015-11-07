/// <reference path="../../_references.d.ts" />
/// <reference path="get-content-service-interface.ts" />
class GetContentBackendOfficeService implements IGetContentService {
    /**
     * @param $q
     * @param office
     */
    constructor(private $q: angular.IQService, private office: any) {}

    /**
     * @returns {IPromise<T>}
     */
    public getSelectedTextAsHtml() {
        const deferred = this.$q.defer();
        const coercion = this.office.CoercionType.Html;
        const options = {valueFormat: 'unformatted', filterType: 'all'};

        this.office.context.document.getSelectedDataAsync(coercion, options, (result) => {
            const error = result.error;

            if (result.status === this.office.AsyncResultStatus.Failed) {
                deferred.reject(error.name + ': ' + error.message);
            } else {
                // Resolve selected data
                deferred.resolve(result.value);
            }
        });

        return deferred.promise;
    }
}
