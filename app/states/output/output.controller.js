(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.output.controller', [])
        .controller('OutputController', OutputController);

    /**
     * Controller constructor
     *
     * @param {ui.router.$state} $state
     * @param {string} output - The generated markdown
     */
    function OutputController($state, output) {
        /**
         * @type {ui.router.$state}
         * @private
         */
        this._$state = $state;

        /**
         * @type {string}
         */
        this.markdown = output;
    }

    /**
     * Go back to the start so a new conversion can take place
     */
    OutputController.prototype.goBackToStart = function() {
        this._$state.go('home');
    };
})(window.angular);
