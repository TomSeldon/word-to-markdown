/// <reference path="../../_references.d.ts" />
(function() {
  'use strict';

  angular.module('word-to-markdown.states.home.controller', [])
    .controller('HomeController', HomeController);

  /**
   * @constructor
   * @param {ui.router.$state} $state - Service for navigating between UI states
   */
  function HomeController($state) {
    /**
     * @type {$state}
     * @private
     */
    this._$state = $state;

    /**
     * @type {boolean}
     * @private
     */
    this._isLoading = false;
  }

  /**
   * Move to the output state where we'll show the generated Markdown.
   *
   * The actual conversion is handled in a resolve when going to the output view, but
   * we can handle failure here if the state transition fails.
   *
   * @returns {undefined}
   */
  HomeController.prototype.convertSelection = function() {
    var _this = this;

    this._isLoading = true;

    // todo: handle error on state change fail
    this._$state.go('output')
      .finally(function() {
        // Mark that we're done loading, whatever the outcome was
        _this._isLoading = false;
      });
  };

  /**
   * @returns {boolean} Returns true if the "convert" button should be shown
   */
  HomeController.prototype.shouldShowConvertButton = function() {
    var notLoading = this._isLoading === false;

    return Boolean(notLoading);
  };
})();
