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
exports.__esModule = true;
var buttonModel_1 = require("./buttonModel");
var Digit = (function (_super) {
    __extends(Digit, _super);
    function Digit(val) {
        var _this = _super.call(this) || this;
        _this.value = val;
        return _this;
    }
    return Digit;
}(buttonModel_1.Button));
exports.Digit = Digit;
//# sourceMappingURL=digitModel.js.map