/// <reference path="../../_references.d.ts" />
module W2MD.Components.Office {
    angular.module('word-to-markdown.office', [])
        .factory('office', officeFactory);

    /**
     * @param {angular.IWindowService} $window - Wrapper around window
     * @returns {Office|null} The Office JS API
     */
    function officeFactory($window:angular.IWindowService) {
        return $window.Office || null;
    }
}
