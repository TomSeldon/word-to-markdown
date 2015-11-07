/// <reference path="../../_references.d.ts" />
/// <reference path="get-content-service-interface.ts" />
class GetContentBackendBrowserService implements IGetContentService {
    /**
     * @param $q
     */
    constructor(private $q: angular.IQService) {}

    /**
     * @returns {IPromise<T>}
     */
    public getSelectedTextAsHtml() {
        return this.$q.when(`
        <div class="WordSection1">
            <h1>Some sample content</h1>

            <p>This is some sample content that can be used for development.</p>
        </div>
        `);
    }
}
