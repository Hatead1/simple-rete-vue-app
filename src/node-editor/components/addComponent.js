import Rete from "rete";
import { NumControl } from "../controls/numControl.js";
import { NumSocket } from "../sockets/sockets";

export class AddComponent extends Rete.Component {
    constructor(){ super("Add"); }

    builder(node) {
        var inp1 = new Rete.Input('num1',"Number 1", NumSocket);
        var inp2 = new Rete.Input('num2', "Number 2", NumSocket);
        var out = new Rete.Output('res', "Result", NumSocket);

        inp1.addControl(new NumControl(this.editor, 'numm1'))
        inp2.addControl(new NumControl(this.editor, 'numm2'))

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl(this.editor, 'preview', true))
            .addOutput(out);
    }

    worker(node, inputs, outputs) {
        var n1 = inputs['num1'].length?inputs['num1'][0]:node.data.numm1;
        var n2 = inputs['num2'].length?inputs['num2'][0]:node.data.numm2;
        var sum = n1 + n2;
        
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setValue(sum);
        outputs['res'] = sum;
    }
}
