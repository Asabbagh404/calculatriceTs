import { button } from './buttonModel'

class calculator {
    buttons : Array<button>;
    result : number;
    handled : number;

    constructor(buttons : Array<button>, result : number, handled : number){
        this.buttons = buttons;
        this.result = result;
        this.handled = handled;
    }
    getResult() {
        return this.result;
    }
    getHandled() {
        return this.handled;
    }
    setHandled(val : number) {
         this.handled = val;
         return this.handled;
    }
    setResult(val : number){
        this.result = val;
        return this.result;
    }
}