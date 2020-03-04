import Mustache = require("mustache");
import {CalculatorController} from "./controller/calculatorController";
import {Calculator} from "./model/calculatorModel";

function renderHome() {
    let calculatorController : CalculatorController = new CalculatorController();
    let calculatorView : Calculator = calculatorController.calcInit();
    fetch('template/calculator.mustache')
        .then((response) => response.text())
        .then((template) => {
            console.log(calculatorView);
            var rendered = Mustache.render(template, { calculatorView, 'title' : 'Calculatrice' });
            document.getElementById('root').innerHTML = rendered;
        });
}
renderHome();