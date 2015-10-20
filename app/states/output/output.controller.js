(function(angular) {
    'use strict';

    angular.module('word-to-markdown.OutputController.output.controller', [])
        .controller('OutputController', OutputController);

    /**
     * Controller constructor
     *
     * @param {string} output - The generated markdown
     */
    function OutputController(output) {
        /**
         * @type {string}
         */
        this.markdown = output;
    }
})(window.angular);
