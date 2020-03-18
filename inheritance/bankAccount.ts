export class BankAccount {
    get balance(): number {
        return this._balance;
    }
    private _balance: number;
  
    deposit(amount: number): number {
        return this._balance + amount;
    }
  
    withdraw(amount: number): number {
        if (amount < this._balance ){
            return this._balance - amount;
        }
        else {
            throw new Error("The withdraw amount must be less or equal than the balance.")
        }
    }
 }