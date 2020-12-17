import {Calculator} from '../model/calculatorModel'
import {Button} from "../model/buttonModel";
import {Digit} from "../model/digitModel";
import {Operator} from "../model/operatorModel";

export class CalculatorController {
    calcInit(): Calculator {
        let buttons = [];
        let actions: Array<string>;
        actions = ['+', '-', '%', '/', '=', 'C'];
        for (let i = 0; i < 10; i++) {
            let digit: Button;
            digit = new Digit(i.toString());
            buttons.push(digit)
        }
        for (let action of actions) {
            let operator: Button;
            operator = new Operator(action);
            buttons.push(operator);
        }
        let calculator: Calculator;
        return calculator = new Calculator(buttons, 0, "0", "");
    }

    addOperation(calculator: Calculator, operator: string) {
        switch (operator) {
            case '+' :
            case '-':
            case '%' :
            case '/' :
                calculator.addCache(operator);
                break;
            case '=' :
                calculator.cache = calculator.cache.replace(/^0+/, '');
                calculator.setCacheToResult();
                break;
            case 'C' :
                calculator.clearCache();
                break;
        }
    }

    addDigit(calculator: Calculator, value: string) {
        calculator.addCache(value)
    }

}