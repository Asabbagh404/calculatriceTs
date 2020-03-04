import {Button} from "./buttonModel";

export class Operator extends Button {
    action : string;
    constructor(val : string){
        super();
        this.action = val;
    }
    getValue(){
        return this.action;
    }
}
