import { CheckingAccount } from "./checkingAccount";
import { SavingsAccount } from "./savingAccount";

let checking = new CheckingAccount();
// checking.balance = 3; should throw error
// CheckingAccount.monthlyFeeAmount; should throw error
checking.deposit(100);
checking.chargeFee();
 
 
let savings = new SavingsAccount();
savings.deposit(100);
let interest = savings.calculateInterest();
savings.calculateInterest()