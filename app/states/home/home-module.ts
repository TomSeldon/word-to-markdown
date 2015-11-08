/// <reference path="../../_references.d.ts" />
/// <reference path="home-controller.ts" />
(function () {
    'use strict';

    angular.module('word-to-markdown.states.home', [
        'ui.router'
    ])
        .controller('HomeController', HomeController)
        .config(routeConfigurator);

    /**
     * @param {ui.router.$stateProvider} $stateProvider - Provider for registering UI states
     * @returns {undefined}
     */
    function routeConfigurator($stateProvider) {
        $stateProvider.state('home', {
            templateUrl: 'app/states/home/home.html',
            controller: 'HomeController as vm'
        });
    }
})();
