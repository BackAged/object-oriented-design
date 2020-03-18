// Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

interface IOperation {
    performOperation():void;
}

interface ICalculator {
    calculate(operation: IOperation):void;
}

class Addition implements IOperation{
    private firstOperand;
    private secondOperand
    private result;

    constructor(firstOperand:number, secondOperand:number) {
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
    }

    performOperation(): void {
        this.result = this.firstOperand + this.secondOperand;
    }

    get operationResult() {
        return this.result;
    }
}

class Substraction implements IOperation{
    private firstOperand;
    private secondOperand
    private result;

    constructor(firstOperand:number, secondOperand:number) {
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
    }

    performOperation(): void {
        this.result = this.firstOperand - this.secondOperand;
    }

    get operationResult() {
        return this.result;
    }
}

class SimpleCalculator implements ICalculator {
    calculate(operation: IOperation): void {
        if (!!operation) {
            throw new Error("Won't happened");
        }

        operation.performOperation();
    }

}


const addition = new Addition(3, 4);
const substraction = new Substraction(3, 5);

const calculator = new SimpleCalculator();
calculator.calculate(addition)

// as it can be seen clearly, the simple calculator is open for extension
// we can pass differation operation without any modification