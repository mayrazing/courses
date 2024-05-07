import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

    static T_SHAPE = new Tetromino(".T.\nTTT\n...\n");

    shape;

    constructor(s) {
        this.shape = RotatingShape.fromString(s);
    }

    toString() {
        return this.shape.toString();
    }

    rotateRight() {
        return new Tetromino(this.shape.rotateRight().toString());
    }

    rotateLeft() {
        return new Tetromino(this.shape.rotateLeft().toString());
    }
}