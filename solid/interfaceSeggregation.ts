// "The interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use."
// Small focused interface instead monolith fat interface

interface IPrint {
    print(toBePrinted: string): void
}

interface IFax {
    fax(toBeFaxed: string): void
}

interface IEmail {
    email(toBeEmailed: string): void
}

interface IPrintEmailFax extends  IPrint, IFax, IEmail{}


class DumbEmailer implements IEmail {
    email(toBeEmailed: string): void{
        console.log("Emailing.....")
    }
}

// we are not forced to implement unncessary methods here, due to interface seggregation
class DumbPrinter implements IPrint {
    print(toBePrinted: string): void {
        console.log("Printing....")
    }
}

// We can add up the interface
class SmartDevice implements  IPrintEmailFax {
    print(toBePrinted: string): void {
        throw new Error("Method not implemented.")
    }
    email(toBeEmailed: string): void {
        throw new Error("Method not implemented.")
    }
    fax(toBeFaxed: string): void {
        throw new Error("Method not implemented.")
    }

}