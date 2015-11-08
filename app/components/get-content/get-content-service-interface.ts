/// <reference path="../../_references.d.ts" />
module W2MD.Components.GetContent {
    export interface IGetContentService {
        getSelectedTextAsHtml() : angular.IPromise<string>
    }
}
