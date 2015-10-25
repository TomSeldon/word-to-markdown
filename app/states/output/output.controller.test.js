describe('output controller', function() {
  var createController;
  var outputController;
  var markdown;

  beforeEach(module('word-to-markdown.states.output'));

  beforeEach(inject(function($injector) {
    /**
     * @returns {OutputController} An instance of the output controller
     */
    createController = function() {
      var $controller = $injector.get('$controller');

      return $controller('OutputController', {
        output: markdown
      });
    };

    markdown = '# some test content';
    outputController = createController();
  }));

  it('should expose the generated markdown', function() {
    expect(outputController.markdown).toBe(markdown);
  });
});
