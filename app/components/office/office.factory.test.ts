/// <reference path="../../_references.d.ts" />
describe('office factory', () => {
    let mockOffice;

    beforeEach(angular.mock.module('word-to-markdown.office'));

    beforeEach(angular.mock.module($provide => {
        mockOffice = {};

        $provide.value('$window', {
            Office: mockOffice
        });
    }));

    it('should expose the global Office object', inject(office => {
        expect(office).toBe(mockOffice);
    }));
});
