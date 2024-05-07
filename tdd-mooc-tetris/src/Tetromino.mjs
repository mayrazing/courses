import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

    static T_SHAPE = new Tetromino(".T.\nTTT\n...\n", 4);
    static I_SHAPE = new Tetromino(".....\n.....\nIIII.\n.....\n.....\n", 2);

    shape;
    orientationShapes = [];

    constructor(s, orientationCount=0) {
        this.shape = RotatingShape.fromString(s);
        this.orientationShapes[0] = this.shape;
        if (orientationCount > 0) {
            for (let i = 1; i < orientationCount; i++) {
                this.orientationShapes[i] = this.orientationShapes[i-1].rotateRight();
            }
        }
    }

    toString() {
        return this.shape.toString();
    }

    rotateRight() {
        return this.getRotatingTetromino(this.shape.rotateRight(), this.orientationShapes);
    }

    rotateLeft() {
        return this.getRotatingTetromino(this.shape.rotateLeft(), this.orientationShapes);
    }

    getRotatingTetromino(shape, orientations) {
        let tetromino = new Tetromino(shape.toString());
        tetromino.orientationShapes = orientations;
        return tetromino;
    }
}