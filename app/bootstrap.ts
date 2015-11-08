module W2MD.Bootstrap {
    const maxInitialisationTime:Number = 3000;
    let officeInitialised:boolean = false;
    let appInitialised:boolean = false;

    // Try to bootstrap the app with Office.
    // This will never get called if we're running in a non-Office
    // environment, such as when developing in a browser.
    bootstrapForOffice();

    // In the case where Office hasn't initialised and we still
    // need to bootstrap the app, e.g. when developing in a browser,
    // expose the bootstrapping function so it can be triggered manually
    setTimeout(function () {
        if (officeInitialised || appInitialised) {
            return;
        }

        console.info(`word-to-markdown didn't start because Office was not initialised.
    To manually start word-to-mark down, run 'W2MD.Bootstrap.bootstrapForBrowser()'`);
    }, maxInitialisationTime);

    /**
     * Start the Angular app
     */
    function bootstrap() {
        appInitialised = true;
        angular.bootstrap(document.getElementById('container'), ['word-to-markdown']);
    }

    /**
     * Bootstrapping function for when running in a browser
     */
    export function bootstrapForBrowser() {
        angular.element(document).ready(bootstrap);
    }

    /**
     * Bootstrapping function for when running in Microsoft Office
     */
    function bootstrapForOffice() {
        // when Office has initalized, manually bootstrap the app
        Office.initialize = function () {
            console.log('>>> Office.initialize()');
            officeInitialised = true;
            bootstrap();
        };
    }
}

