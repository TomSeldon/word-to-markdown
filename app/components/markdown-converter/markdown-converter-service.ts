/// <reference path="../../_references.d.ts" />
/// <reference path="markdown-converter-service-interface.ts" />
/// <reference path="../get-content/get-content-service-interface.ts" />
class MarkdownConverterService implements IMarkdownConverterService {
    /**
     * @param {angular.IQService} $q
     * @param {IGetContentService} getContent
     */
    constructor(private $q:angular.IQService, private getContent:IGetContentService) {
    }

    /**
     * @param {string} html - HTML representation of Word document text
     * @returns {Promise.<string>} Markdown representation of HTML
     */
    public convertFromHtml(html:string):angular.IPromise<string> {
        var deferred = this.$q.defer();
        var und = new upndown();

        und.convert(html, function (error, markdown) {
            if (error) {
                deferred.reject(error);
                return;
            }

            deferred.resolve(markdown);
        });

        return deferred.promise;
    }

    /**
     * Converts the selected text within the Word document to markdown.
     *
     * @returns {Promise.<string>} Promise that resolves to markdown representation of selected text
     */
    public convertSelectedText():angular.IPromise<string> {
        return this.getContent.getSelectedTextAsHtml()
            .then((html) => {
                return this.convertFromHtml(html);
            });
    }
}
