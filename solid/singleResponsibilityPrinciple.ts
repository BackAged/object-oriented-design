// Single responsibility
// should have only one reason to change

class RectangleBad{
    private height: number;
    private width: number;

    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }

    area(): number {
        return this.height * this.width;
    }

    draw(): void {
        console.log("Drawing the Rectangle");
        console.log("Done drawing to the gui")
    }
}


// SingleResponsible Rectangle
class RectangleGeometry {
    private height: number;
    private width: number;
    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }
    
    area(): number {
        return this.height * this.width;
    }
}

// SingleResponsible Rectangle
class RectangleView {
    private height: number;
    private width: number;
    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }
    
    draw(): void {
        console.log("Drawing the Rectangle");
        console.log("Done drawing to the gui")
    }
}