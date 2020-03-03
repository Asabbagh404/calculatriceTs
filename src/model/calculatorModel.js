"use strict";
exports.__esModule = true;
var calculator = (function () {
    function calculator(buttons, result, handled) {
        this.buttons = buttons;
        this.result = result;
        this.handled = handled;
    }
    calculator.prototype.getResult = function () {
        return this.result;
    };
    calculator.prototype.getHandled = function () {
        return this.handled;
    };
    calculator.prototype.setHandled = function (val) {
        this.handled = val;
        return this.handled;
    };
    calculator.prototype.setResult = function (val) {
        this.result = val;
        return this.result;
    };
    return calculator;
}());
//# sourceMappingURL=calculatorModel.js.map