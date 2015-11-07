/// <reference path="../../_references.d.ts" />
(function() {
  'use strict';

  angular.module('word-to-markdown.states.output.controller', [])
    .controller('OutputController', OutputController);

  /**
   * @constructor
   * @param {string} output - The generated markdown
   */
  function OutputController(output) {
    /**
     * @type {string}
     */
    this.markdown = output;
  }
})();
