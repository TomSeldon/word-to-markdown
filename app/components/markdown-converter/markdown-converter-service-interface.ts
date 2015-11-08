/// <reference path="../../_references.d.ts" />
module W2MD.Components.MarkdownConverter {
    export interface IMarkdownConverterService {
        convertSelectedText() : angular.IPromise<string>
        convertFromHtml(html:string) : angular.IPromise<string>
    }
}
