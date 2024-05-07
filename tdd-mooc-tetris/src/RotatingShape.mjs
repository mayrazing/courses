export class RotatingShape {
    blocks;
    dimension;

    constructor(blocks) {
        this.blocks = blocks;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].length != blocks.length) throw new Error("Shape must be square")
        }
        this.dimension = blocks.length;
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
        for (let i = 0; i < this.rows(); i++) {
            for (let j = 0; j < this.columns(); j++) {
                s += this.getBlockAt(i, j);
            }
            s += "\n";
        }
        return s;
    }

    rows() {
        return this.dimension;
    }

    columns() {
        return this.dimension;
    }

    getBlockAt(row, col) {
        return this.blocks[row][col];
    }

    rotateRight() {
        let rotatedBlocks = [];
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                if (!rotatedBlocks[j]) rotatedBlocks[j] = []
                rotatedBlocks[j][this.dimension - i -1] = this.blocks[i][j];
            }
        }
        return new RotatingShape(rotatedBlocks);
    }

    rotateLeft() {
        return this.rotateRight().rotateRight().rotateRight();
    }
}