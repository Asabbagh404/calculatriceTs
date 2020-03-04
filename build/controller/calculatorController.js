"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculatorModel_1 = require("../model/calculatorModel");
var digitModel_1 = require("../model/digitModel");
var operatorModel_1 = require("../model/operatorModel");
var CalculatorController = (function () {
    function CalculatorController() {
    }
    CalculatorController.prototype.calcInit = function () {
        var buttons;
        var actions;
        actions = ['+', '-', '%', '/'];
        for (var i = 0; i < 10; i++) {
            var digit = void 0;
            digit = new digitModel_1.Digit(i.toString());
            buttons.push(digit);
        }
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var action = actions_1[_i];
            var operator = void 0;
            operator = new operatorModel_1.Operator(action);
            buttons.push(operator);
        }
        var calculator;
        return calculator = new calculatorModel_1.Calculator(buttons, 0, "", null);
    };
    return CalculatorController;
}());
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculatorController.js.map