/// <reference path="markdown-converter-service-interface.ts" />
describe('markdown converter service', () => {
    let markdownConverter:IMarkdownConverterService;

    beforeEach(angular.mock.module('word-to-markdown.markdown-converter'));

    beforeEach(inject(function ($injector) {
        markdownConverter = $injector.get('markdownConverter');
    }));

    it('expose a method for converting HTML to markdown', () => {
        expect(markdownConverter.convertFromHtml).toEqual(jasmine.any(Function));
    });

    it('should expose a method for converting the selected text to markdown', () => {
        expect(markdownConverter.convertSelectedText).toEqual(jasmine.any(Function));
    });

    // todo: Add more meaningful tests once suitable mocks for Office and upndown are in place
});
