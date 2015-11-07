describe('office factory', function() {
  var mockOffice;

  beforeEach(module('word-to-markdown.office'));

  beforeEach(module(function($provide) {
    mockOffice = {};

    $provide.value('$window', {
      Office: mockOffice
    });
  }));

  it('should expose the global Office object', inject(function(office) {
    expect(office).toBe(mockOffice);
  }));
});
