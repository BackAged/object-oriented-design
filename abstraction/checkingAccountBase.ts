export abstract class CheckingAccountAbs {
    protected monthlyFeeAmount: number = 5.00;

    abstract chargeFee(amount: number );
}

