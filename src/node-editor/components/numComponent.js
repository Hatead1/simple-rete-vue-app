import Rete from "rete";
import { NumControl } from "../controls/numControl.js";
import { NumSocket } from "../sockets/sockets";

export class NumComponent extends Rete.Component {
    constructor(){ super("Number"); }

    builder(node) {
        var out1 = new Rete.Output('num', "Number", NumSocket);
        return node.addControl(new NumControl(this.editor, 'num')).addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}
