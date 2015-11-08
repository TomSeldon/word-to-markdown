/// <reference path="../../_references.d.ts" />
/// <reference path="markdown-converter-service-interface.ts" />
/// <reference path="markdown-converter-service.ts" />
(function() {
    'use strict';

    angular.module('word-to-markdown.markdown-converter', [
        'word-to-markdown.get-content'
    ])
        .service('markdownConverter', MarkdownConverterService);
})();
