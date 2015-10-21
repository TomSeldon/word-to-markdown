(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.output.controller', [])
        .controller('OutputController', OutputController);

    /**
     * Controller constructor
     *
     * @param {string} output - The generated markdown
     */
    function OutputController($state, output) {
        /**
         * @type {string}
         */
        this.markdown = output;
    }
})(window.angular);
