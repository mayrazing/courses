import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

    static T_SHAPE = new Tetromino(".T.\nTTT\n...\n", 4);
    static I_SHAPE = new Tetromino(".....\n.....\nIIII.\n.....\n.....\n", 2);

    orientationShapes = [];
    currentOrientation;

    constructor(s, orientationCount=0) {
        this.orientationShapes[0] = RotatingShape.fromString(s);
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
        return this.getRotatingTetromino(this.orientationShapes, this.currentOrientation, 1);
    }

    rotateLeft() {
        return this.getRotatingTetromino(this.orientationShapes, this.currentOrientation, -1);
    }

    getRotatingTetromino(orientations, current, nextStep) {
        let tetromino = new Tetromino(orientations[current].toString());
        tetromino.orientationShapes = orientations;
        tetromino.currentOrientation = (current + nextStep + orientations.length) % orientations.length;
        return tetromino;
    }
}