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
        for (let i = 0; i < this.blocks.length; i++) {
            for (let j = 0; j < this.blocks[i].length; j++) {
                s += this.blocks[i][j];
            }
            s += "\n";
        }
        return s;
    }
    rotateRight() {
        let rotatedBlocks = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!rotatedBlocks[j]) rotatedBlocks[j] = []
                rotatedBlocks[j][2 - i] = this.blocks[i][j];
            }
        }
        return new RotatingShape(rotatedBlocks);
    }
    rotateLeft() {
        let rotatedBlocks = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!rotatedBlocks[2 - j]) rotatedBlocks[2 - j] = []
                rotatedBlocks[2 - j][i] = this.blocks[i][j];
            }
        }
        return new RotatingShape(rotatedBlocks);
    }
}