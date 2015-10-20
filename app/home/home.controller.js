(function(angular) {
  'use strict';

  angular.module('word-to-markdown.states.home', [])
      .controller('HomeController', HomeController);

  /**
   * Controller constructor
   */
  function HomeController(getContent) {
    // todo: Implement
    getContent.getDocumentAsOoxml().then(function(data){
      console.log(data);
    })
  }

})(window.angular);
