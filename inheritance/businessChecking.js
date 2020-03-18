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
var checkingAccount_1 = require("./checkingAccount");
var BusinessChecking = /** @class */ (function (_super) {
    __extends(BusinessChecking, _super);
    function BusinessChecking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BusinessChecking.prototype, "blah", {
        get: function () {
            return "blah";
        },
        enumerable: true,
        configurable: true
    });
    return BusinessChecking;
}(checkingAccount_1.CheckingAccount));
exports.BusinessChecking = BusinessChecking;
