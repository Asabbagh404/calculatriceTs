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
var digit = (function (_super) {
    __extends(digit, _super);
    function digit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return digit;
}(buttonModel_1.button));
exports.digit = digit;
//# sourceMappingURL=digitModel.js.map