import { BankAccount } from "../inheritance/bankAccount";
import { Fee } from "./fee";
import { CheckingAccountAbs } from "./checkingAccountBase";

export class CheckingAccount extends BankAccount implements Fee {
    protected monthlyFeeAmount: number = 5.00;
    chargeFee(): number {
        return this.monthlyFeeAmount;
    }
}

export class CheckingAccountFAbs extends CheckingAccountAbs {
    chargeFee(): number {
        return this.monthlyFeeAmount;
    }
}