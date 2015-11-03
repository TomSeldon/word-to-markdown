describe('platform service', function() {
  /** @type {PlatformService} */
  var platform;

  beforeEach(module('word-to-markdown.platform'));

  describe('when running in a browser', function() {
    beforeEach(module(function($provide) {
      $provide.value('office', {
        context: {
          document: undefined
        }
      });
    }));

    beforeEach(inject(function($injector) {
      platform = $injector.get('platform');
    }));

    it('should not say we are running in an Office environment', function() {
      expect(platform.isRunningInOffice()).toBe(false);
    });

    it('should say we are running in a browser', function() {
      expect(platform.isRunningInBrowser()).toBe(true);
    });
  });

  describe('when running in an Office environment', function() {
    beforeEach(module(function($provide) {
      $provide.value('office', {
        context: {
          document: {}
        }
      });
    }));

    beforeEach(inject(function($injector) {
      platform = $injector.get('platform');
    }));

    it('should say we are running in an Office environment', function() {
      expect(platform.isRunningInOffice()).toBe(true);
    });

    it('should not say we are running in a browser', function() {
      expect(platform.isRunningInBrowser()).toBe(false);
    });
  });
});
