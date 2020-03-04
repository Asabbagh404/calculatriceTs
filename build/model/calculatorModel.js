"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = (function () {
    function Calculator(buttons, result, handled, cache) {
        if (result === void 0) { result = 0; }
        if (handled === void 0) { handled = "0"; }
        if (cache === void 0) { cache = []; }
        this.result = 0;
        this.handled = "0";
        this.cache = [];
        this.buttons = buttons;
        this.result = result;
        this.handled = handled;
        this.cache = cache;
    }
    Calculator.prototype.getResult = function () {
        return this.result;
    };
    Calculator.prototype.getHandled = function () {
        return this.handled;
    };
    Calculator.prototype.setHandled = function (val) {
        this.handled = val;
        return this.handled;
    };
    Calculator.prototype.setResult = function (val) {
        this.result = val;
        return this.result;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculatorModel.js.map