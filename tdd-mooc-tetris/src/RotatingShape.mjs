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
        let rows = [];
        let blocks = [];
        rows = this.shape.split("\n");
        blocks = rows.map(row => row.trim().split(""));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                s += blocks[i][j];
            }
            s += "\n";
        }
        return s;
    }
}