"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModel_1 = require("./buttonModel");
var Operator = (function (_super) {
    __extends(Operator, _super);
    function Operator(val) {
        var _this = _super.call(this) || this;
        _this.action = val;
        return _this;
    }
    Operator.prototype.getValue = function () {
        return this.action;
    };
    return Operator;
}(buttonModel_1.Button));
exports.Operator = Operator;
//# sourceMappingURL=operatorModel.js.map