import {Button} from "./buttonModel";

export class Digit extends Button {
    constructor(val : string){
        super();
        this.value = val;
    }
}