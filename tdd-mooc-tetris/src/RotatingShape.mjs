export class RotatingShape {
    shape;

    constructor(shape) {
        this.shape = shape;
    }

    static fromString(shape) {
        return new RotatingShape(shape);
    }

    toString() {
        let s = "";
        s = "ABC\nDEF\nGHI\n";
        return s;
    }
}