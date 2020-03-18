import { BankAccount } from "./bankAccount";

export class SavingsAccount extends BankAccount {
    private _interestRate;
    public calculateInterest(){
        return this.balance * this._interestRate;
    }
}