/// <reference path="../../_references.d.ts" />
/// <reference path="platform-service-interface.ts" />
class PlatformService implements IPlatformService {
    constructor(private office:any) {
    }

    /**
     * Note: If this is called when in an Office environment but before Office has initialised,
     * this will return a false positive.
     *
     * @returns {boolean}
     */
    public isRunningInBrowser() {
        return !this.isRunningInOffice();
    }

    /**
     * Note: If this is called when in an Office environment but before Office has initialised,
     * this will return a false negative.
     *
     * @returns {boolean}
     */
    public isRunningInOffice() {
        const hasContext = this.office && typeof this.office.context !== 'undefined';

        return Boolean(hasContext && typeof this.office.context.document !== 'undefined');
    }
}
