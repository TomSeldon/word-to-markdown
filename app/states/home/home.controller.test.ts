describe('home controller', function() {
  var createController;
  var homeController;

  beforeEach(module('word-to-markdown.states.home'));

  beforeEach(inject(function($injector) {
    /**
     * @returns {HomeController} An instance of the home controller
     */
    createController = function() {
      var $controller = $injector.get('$controller');

      return $controller('HomeController');
    };

    homeController = createController();
  }));

  describe('when requesting to convert the document to markdown', function() {
    var $state;

    beforeEach(inject(function($injector) {
      var $q = $injector.get('$q');

      $state = $injector.get('$state');

      spyOn($state, 'go').and.returnValue($q.when());
    }));

    it('should try to take the user to the output state', function() {
      homeController.convertSelection();

      expect($state.go).toHaveBeenCalledWith('output');
    });

    it('should hide the convert button after it is pressed', function() {
      homeController.convertSelection();
      expect(homeController.shouldShowConvertButton()).toBe(false);
    });
  });
});
