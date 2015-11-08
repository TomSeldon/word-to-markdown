/// <reference path="../../_references.d.ts" />
/// <reference path="markdown-converter-service-interface.ts" />
/// <reference path="markdown-converter-service.ts" />
module W2MD.Components.MarkdownConverter {
    angular.module('word-to-markdown.markdown-converter', [
        'word-to-markdown.get-content'
    ])
        .service('markdownConverter', W2MD.Components.MarkdownConverter.MarkdownConverterService);
}
