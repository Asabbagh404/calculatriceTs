import {Calculator} from '../model/calculatorModel'
import {Button} from "../model/buttonModel";
import {Digit} from "../model/digitModel";
import {Operator} from "../model/operatorModel";

export class CalculatorController {
    calcInit () : Calculator {
        let buttons: Array<Button>;
        let actions : Array<string>;
        actions = ['+','-','%','/'];
        for (let i = 0; i < 10; i++) {
            let digit: Button;
            digit = new Digit(i.toString());
            buttons.push(digit)
        }
        for(let action of actions) {
            let operator : Button;
            operator = new Operator(action);
            buttons.push(operator);
        }
        let calculator : Calculator;
        return calculator = new Calculator(buttons, 0, "", null);
    }
}