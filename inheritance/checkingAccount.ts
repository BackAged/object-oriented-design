import { BankAccount } from "./bankAccount";

export class CheckingAccount extends BankAccount {
    protected monthlyFeeAmount: number = 5.00;
    chargeFee(): number {
        return this.monthlyFeeAmount;
    }
}