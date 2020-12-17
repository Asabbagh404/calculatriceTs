"use strict";
exports.__esModule = true;
var Mustache = require("mustache");
var calculatorController_1 = require("./controller/calculatorController");
var calculatorModel_1 = require("./model/calculatorModel");
function renderHome() {
    var calculatorController = new calculatorController_1.CalculatorController();
    var calculatorView = calculatorController.calcInit();
    fetch('../template/calculator.mustache')
        .then(function (response) { return response.text(); })
        .then(function (template) {
        var rendered = Mustache.render(template, { Calculator: calculatorModel_1.Calculator });
        document.getElementById('root').innerHTML = rendered;
    });
}
//# sourceMappingURL=app.js.map