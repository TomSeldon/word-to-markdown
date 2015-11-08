/// <reference path="../../_references.d.ts" />
interface IMarkdownConverterService {
    convertSelectedText() : angular.IPromise<string>
    convertFromHtml(html:string) : angular.IPromise<string>
}
