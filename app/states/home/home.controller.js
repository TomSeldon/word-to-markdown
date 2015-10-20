(function(angular) {
  'use strict';

  angular.module('word-to-markdown.states.home.controller', [])
      .controller('HomeController', HomeController);

  /**
   * Home Controller constructor
   *
   * @param {ui.router.$state} $state
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
   */
  HomeController.prototype.convertDocument = function() {
    var _this = this;

    this._isLoading = true; // set as loading

    this._$state.go('output')
        .catch(function(error) {
          // todo: handle error
        })
        .finally(function() {
          // Mark that we're done loading, whatever the outcome was
          _this._isLoading = false;
        });
  };

  /**
   * @returns {boolean}
   */
  HomeController.prototype.shouldShowConvertButton = function() {
    var notLoading = this._isLoading === false;

    return Boolean(notLoading);
  };
})(window.angular);
