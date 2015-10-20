(function(angular) {
    'use strict';

    angular.module('word-to-markdown.get-content', [])
        .service('getContent', GetContentService);

    /**
     * @class GetContentService
     * @constructor
     *
     * @param {angular.$q} $q
     */
    function GetContentService($q) {
        this._$q = $q;
    }

    /**
     * @returns {Promise.<string>} HTML representation of the entire Word document
     */
    GetContentService.prototype.getDocumentAsOoxml = function() {
        var deferred = this._$q.defer();
        var coercion = Office.CoercionType.Ooxml;
        var options = { valueFormat: "unformatted", filterType: "all" };

        Office.context.document.getSelectedDataAsync(coercion, options,
          function (asyncResult) {
              var error = asyncResult.error;
              if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                deferred.reject(error.name + ": " + error.message)
              }
              else {
                // Resolve selected data.
                deferred.resolve(asyncResult.value);
              }
          });

        return  deferred.promise;
    };
})(window.angular);
