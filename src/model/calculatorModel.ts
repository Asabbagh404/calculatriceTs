import { Button } from './buttonModel'

export class Calculator {
    buttons : Array<Button>;
    result : number = 0;
    handled : string = "0";
    cache : string = "";

    constructor(buttons : Array<Button>, result : number = 0, handled : string = "0", cache : string = ""){
        this.buttons = buttons;
        this.result = result;
        this.handled = handled;
        this.cache = cache;
    }
    clearCache(){
     this.cache = ""
    }
    getCache(){
        return this.cache
    }
    addCache(value : string){
        this.cache = this.cache.concat('', value);
    }

    setResult(val : number){
        this.result = val;
    }
    setCacheToResult(){
        this.cache =  eval(this.cache).toString();
    }
}