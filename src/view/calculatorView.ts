import { CalculatorController } from '../controller/calculatorController'
import { View } from './view';
import {Button} from "../model/buttonModel";
import {Calculator} from "../model/calculatorModel";

export class CalculatorView implements View{
    title : string  = 'Calculatrice';
    data : Calculator;
    html : string = '';

    initView(){
        let calculatorController : CalculatorController = new CalculatorController();
        this.data = calculatorController.calcInit();
        this.htmlGeneration()
    }
    htmlGeneration(){
        for(let button of this.data.buttons){
            var btn = document.createElement("BUTTON");
            btn.innerHTML = button.value.toString();
            document.body.appendChild(btn);
        }
    }
}