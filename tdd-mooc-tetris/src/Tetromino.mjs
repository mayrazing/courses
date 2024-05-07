import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

    static T_SHAPE = new Tetromino(".T.\nTTT\n...\n", 4);
    static I_SHAPE = new Tetromino(".....\n.....\nIIII.\n.....\n.....\n", 2);

    shape;
    orientationShapes = [];
    currentOrientation;

    constructor(s, orientationCount=0) {
        this.shape = RotatingShape.fromString(s);
        this.orientationShapes[0] = this.shape;
        if (orientationCount > 0) {
            for (let i = 1; i < orientationCount; i++) {
                this.orientationShapes[i] = this.orientationShapes[i-1].rotateRight();
            }
        }
        this.currentOrientation = 0;
    }

    toString() {
        return this.orientationShapes[this.currentOrientation].toString();
    }

    rotateRight() {
        return this.getRotatingTetromino(this.shape.rotateRight(), this.orientationShapes, this.currentOrientation + 1);
    }

    rotateLeft() {
        return this.getRotatingTetromino(this.shape.rotateLeft(), this.orientationShapes, this.currentOrientation - 1);
    }

    getRotatingTetromino(shape, orientations, current) {
        let tetromino = new Tetromino(shape.toString());
        tetromino.orientationShapes = orientations;
        tetromino.currentOrientation = (current + orientations.length) % orientations.length;
        return tetromino;
    }
}