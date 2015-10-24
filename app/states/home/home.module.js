(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.home', [
        'ui.router',
        'word-to-markdown.states.home.controller'
    ])
        .config(routeConfigurator);

    /**
     * @param {ui.router.$stateProvider} $stateProvider
     */
    function routeConfigurator($stateProvider) {
        $stateProvider.state('home', {
            templateUrl: 'app/states/home/home.html',
            controller: 'HomeController as vm'
        });
    }
})(window.angular);
