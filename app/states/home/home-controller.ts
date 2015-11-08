/// <reference path="../../_references.d.ts" />
module W2MD.States.Home {
    const unrecoverableErrorTypes = ['Invalid Coercion Type'];

    export class HomeController {
        private isLoading:boolean;
        private canConvert:boolean;
        private error:Office.Error;

        constructor(private $state, private $log) {
            this.isLoading = false;
            this.canConvert = true;
        }

        /**
         * @returns {string}
         */
        public get errorMessage():string {
            if (!this.error) {
                return '';
            }

            switch (this.error.name) {
                case 'Invalid Coercion Type':
                    return 'w2md.error.unsupported-version-of-word';
                    break;

                default:
                    return 'w2md.error.unknown-conversion-error';
            }
        }

        /**
         * Move to the output state where we'll show the generated markdown.
         *
         * The actual conversion is handled in a resolve when going to the output view, but
         * we can handle failure here if the state transition fails.
         */
        public convertSelection() {
            // Mark as loading
            this.isLoading = true;

            // Clear any existing error
            this.error = null;

            this.$state.go('output')
                .then(() => {
                    this.canConvert = true;
                })
                .catch(error => {
                    this.error = error;
                    this.$log.error('Could not show output:', error);

                    // is this was not a recoverable error, don't allow future conversion attempts
                    if (this.error.name && unrecoverableErrorTypes.indexOf(this.error.name) > -1) {
                        this.canConvert = false;
                    }
                })
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
            const canConvert = this.canConvert === true;

            return Boolean(notLoading && canConvert);
        }

        /**
         * @returns {Boolean}
         */
        public hasError():boolean {
            return Boolean(this.errorMessage);
        }
    }
}
