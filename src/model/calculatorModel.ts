import { Button } from './buttonModel'

export class Calculator {
    buttons : Array<Button>;
    result : number = 0;
    handled : string = "0";
    cache : Array<string> = [];

    constructor(buttons : Array<Button>, result : number = 0, handled : string = "0", cache : Array<string> = []){
        this.buttons = buttons;
        this.result = result;
        this.handled = handled;
        this.cache = cache;
    }
    getResult() {
        return this.result;
    }
    getHandled() {
        return this.handled;
    }
    setHandled(val : string) {
         this.handled = val;
         return this.handled;
    }
    setResult(val : number){
        this.result = val;
        return this.result;
    }
}