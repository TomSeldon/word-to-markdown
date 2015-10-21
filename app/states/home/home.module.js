(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.home', [
        'ui.router',
        'word-to-markdown.states.home.controller'
    ])
        .config(routeConfigurator);

    /**
     * @param {ui.router.$stateProvider} $stateProvider
     * @param {ui.router.$urlRouterProvider} $urlRouterProvider
     */
    function routeConfigurator($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/states/home/home.html',
            controller: 'HomeController as vm'
        });

        // Redirect to home if no URL specified
        $urlRouterProvider.when('', '/');
    }
})(window.angular);
