/// <reference path="../../_references.d.ts" />
module W2MD.Components.Platform {
    export interface IPlatformService {
        isRunningInBrowser(): boolean;
        isRunningInOffice(): boolean;
    }
}
