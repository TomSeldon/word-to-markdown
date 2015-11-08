/// <reference path="../../_references.d.ts" />
/// <reference path="get-content-service-interface.ts" />
class GetContentBackendOfficeService implements IGetContentService {
    /**
     * @param $q
     * @param office
     */
    constructor(private $q:angular.IQService, private office:any) {
    }

    /**
     * @returns {IPromise<T>}
     */
    public getSelectedTextAsHtml() {
        const deferred = this.$q.defer();
        const coercion = this.office.CoercionType.Html;
        const options = {valueFormat: 'unformatted', filterType: 'all'};

        this.office.context.document.getSelectedDataAsync(coercion, options, (result) => {
            const error = result.error;
            let html = result.value;

            if (result.status === this.office.AsyncResultStatus.Failed) {
                deferred.reject(error.name + ': ' + error.message);
            } else {
                // Get just the selected text HTML, without all of the extra content
                html = GetContentBackendOfficeService.cleanHtml(html);

                // Resolve selected data
                deferred.resolve(html);
            }
        });

        return deferred.promise;
    }

    /**
     * todo: Implement way of getting clean DOM without relying on coupling to undocumented implementation detail
     *
     * The DOM we get back for the selected text isn't a partial HTML fragment, but a full HTML document complete with
     * <head>, style elements, <body>, etc. This results in some junk content when converting to markdown.
     *
     * To workaround this, rather than convert the entire DOM we can instead target the specific element that contains
     * the HTML representation of the selected text. This works just fine, but means we're coupled do an undocumented
     * implementation detail of Office 365 and so it could break in the future.
     *
     * @param {string} html - HTML document from Word
     * @returns {string} - A subset of the original HTML, i.e. just the content section without <head> etc.
     * @private
     */
    private static cleanHtml(html:string) {
        let div = document.createElement('div');
        let cleanedHtml;

        div.innerHTML = html;

        cleanedHtml = angular.element(div).find('.WordSection1').html();
        cleanedHtml = cleanedHtml.trim();

        return cleanedHtml;
    }
}
