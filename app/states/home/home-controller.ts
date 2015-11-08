/// <reference path="../../_references.d.ts" />
class HomeController {
    private isLoading:boolean;

    constructor(private $state) {
        this.isLoading = false;
    }

    /**
     * Move to the output state where we'll show the generated markdown.
     *
     * The actual conversion is handled in a resolve when going to the output view, but
     * we can handle failure here if the state transition fails.
     */
    public convertSelection() {
        this.isLoading = true;

        // todo: handle error on state change fail
        this.$state.go('output')
            .finally(() => {
                // Mark that we're done loading, whatever the outcome was
                this.isLoading = false;
            });
    }

    /**
     * @returns {Boolean}
     */
    public shouldShowConvertButton():boolean {
        const notLoading = this.isLoading === false;

        return Boolean(notLoading);
    }
}
