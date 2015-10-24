(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.output.controller', [])
        .controller('OutputController', OutputController);

    /**
     * @param {string} output - The generated markdown
     */
    function OutputController(output) {
        /**
         * @type {string}
         */
        this.markdown = output;
    }
})(window.angular);
