import {CalculatorController} from "../controller/calculatorController";
import {Calculator} from "../model/calculatorModel";
import Mustache = require("mustache");

let calculatorController: CalculatorController = new CalculatorController();
let calculatorView: Calculator = calculatorController.calcInit();
export default function render() {
    fetch('template/calculator.mustache')
        .then((response) => response.text())
        .then((template) => {
            var rendered = Mustache.render(template, {calculatorView, 'title': 'Calculatrice', 'cache' : calculatorView.cache});
            document.getElementById('root').innerHTML = rendered;
            document.querySelectorAll('.digit').forEach(item => {
                item.addEventListener("click", function () {
                    calculatorController.addDigit(calculatorView, this.innerHTML);
                    console.log(calculatorView);
                    document.querySelector('input').setAttribute('value', calculatorView.cache);
                })
            });
            document.querySelectorAll('.operation').forEach(item => {
                item.addEventListener("click", function () {
                    calculatorController.addOperation(calculatorView, this.innerHTML);
                    console.log(calculatorView);
                    document.querySelector('input').setAttribute('value', calculatorView.cache);
                })
            })
        });
}