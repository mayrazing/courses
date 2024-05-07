export class RotatingShape {
    blocks;

    constructor(blocks) {
        this.blocks = blocks;
    }

    static fromString(shape) {
        let rows = [];
        let blocks = [];
        rows = shape.split("\n");
        blocks = rows.map(row => row.trim().split(""));
        return new RotatingShape(blocks);
    }

    toString() {
        let s = "";
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                s += this.blocks[i][j];
            }
            s += "\n";
        }
        return s;
    }
}