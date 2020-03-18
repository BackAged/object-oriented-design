"use strict";
exports.__esModule = true;
var checkingAccount_1 = require("../inheritance/checkingAccount");
var businessChecking_1 = require("../inheritance/businessChecking");
var checkingAcc = new checkingAccount_1.CheckingAccount();
checkingAcc.chargeFee();
var businesChecking = new businessChecking_1.BusinessChecking();
console.log(businesChecking.chargeFee);
