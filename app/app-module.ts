module W2MD {
    angular.module('word-to-markdown', [
        // Vendor
        'ngAnimate',
        'ngSanitize',

        // Components
        'word-to-markdown.get-content',
        'word-to-markdown.markdown-converter',
        'word-to-markdown.translations',

        // States
        'word-to-markdown.states.home',
        'word-to-markdown.states.output'
    ])
        .run(goToInitialState)
        .config(debugLogging);

    /**
     * @param {ui.router.$state} $state - Service for transitioning between UI states
     *
     * @returns {undefined}
     */
    function goToInitialState($state) {
        $state.go('home');
    }

    /**
     * @param {angular.$logProvider} $logProvider - Provider for configuring log service
     *
     * @returns {undefined}
     */
    function debugLogging($logProvider) {
        // set debug logging to on
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }
}
