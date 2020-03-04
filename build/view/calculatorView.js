"use strict";
exports.__esModule = true;
var calculatorController_1 = require("../controller/calculatorController");
var CalculatorView = (function () {
    function CalculatorView() {
        this.title = 'Calculatrice';
        this.html = '';
    }
    CalculatorView.prototype.initView = function () {
        var calculatorController = new calculatorController_1.CalculatorController();
        this.data = calculatorController.calcInit();
        this.htmlGeneration();
    };
    CalculatorView.prototype.htmlGeneration = function () {
        for (var _i = 0, _a = this.data.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            var btn = document.createElement("BUTTON");
            btn.innerHTML = button.value.toString();
            document.body.appendChild(btn);
        }
    };
    return CalculatorView;
}());
exports.CalculatorView = CalculatorView;
//# sourceMappingURL=calculatorView.js.map