/// <reference path="../../_references.d.ts" />
/// <reference path="home-controller.ts" />
module W2MD.States.Home {
    angular.module('word-to-markdown.states.home', [
        'ui.router'
    ])
        .controller('HomeController', W2MD.States.Home.HomeController)
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
}
