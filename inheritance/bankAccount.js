"use strict";
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: true,
        configurable: true
    });
    BankAccount.prototype.deposit = function (amount) {
        return this._balance + amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount < this._balance) {
            return this._balance - amount;
        }
        else {
            throw new Error("The withdraw amount must be less or equal than the balance.");
        }
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
