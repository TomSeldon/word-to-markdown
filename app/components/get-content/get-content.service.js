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
        // todo: implement
        return  this._$q.when('some ooxml stuff');
    };
})(window.angular);
