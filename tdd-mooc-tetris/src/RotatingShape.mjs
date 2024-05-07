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
        for (let i = 0; i < this.blocks.length; i++) {
            for (let j = 0; j < this.blocks[i].length; j++) {
                if (!rotatedBlocks[j]) rotatedBlocks[j] = []
                rotatedBlocks[j][this.blocks.length - i -1] = this.blocks[i][j];
            }
        }
        return new RotatingShape(rotatedBlocks);
    }

    rotateLeft() {
        return this.rotateRight().rotateRight().rotateRight();
    }
}