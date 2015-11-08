/// <reference path="../../_references.d.ts" />
module W2MD.States.Output {
    export class OutputController {
        public markdown:string;

        /**
         * @param {string} output - Generated markdown
         */
        constructor(private output:string) {
            this.markdown = output;
        }
    }
}
