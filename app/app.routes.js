(function(angular){
  'use strict';

  angular.module('word-to-markdown.routes', [
    'word-to-markdown.states.home'
  ])
      .config(routeConfigurator);

  /**
   * @param {angular.$routeProvider} $routeProvider
   */
  function routeConfigurator($routeProvider){
    $routeProvider
        .when('/', {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        });

    $routeProvider.otherwise({redirectTo: '/'});
  }

})(window.angular);
