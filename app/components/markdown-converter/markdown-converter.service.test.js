describe('platform service', function() {
  /** @type {MarkdownConverterService} */
  var markdownConverter;

  beforeEach(module('word-to-markdown.markdown-converter'));

  beforeEach(inject(function($injector) {
    markdownConverter = $injector.get('markdownConverter');
  }));

  it('expose a method for converting HTML to markdown', function() {
    expect(markdownConverter.convertFromHtml).toEqual(jasmine.any(Function));
  });

  it('should expose a method for converting the selected text to markdown', function() {
    expect(markdownConverter.convertSelectedText).toEqual(jasmine.any(Function));
  });

  // todo: Add more meaningful tests once suitable mocks for Office and upndown are in place
});
