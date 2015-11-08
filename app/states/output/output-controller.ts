/// <reference path="../../_references.d.ts" />
class OutputController {
    public markdown:string;

    /**
     * @param {string} output - Generated markdown
     */
    constructor(private output:string) {
        this.markdown = output;
    }
}
