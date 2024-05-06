export class Board {
  EMPTY = ".";

  width;
  height;
  stationaryBlocks = [];

  fallingBlock = null;
  fallingBlockRow;
  fallingBlockCol;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.stationaryBlocks = Array.from({ length: height }, () => Array.from({ length: width }, () => this.EMPTY));
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        s += this.getBlockAt(i, j);
      }
      s += "\n";
    }
    return s;
  }

  getBlockAt(row, col) {
    if (this.hasFallingAt(row, col)) {
      return this.fallingBlock;
    }
    return this.stationaryBlocks[row][col];
  }

  hasFallingAt(row, col) {
    return this.hasFalling() && row == this.fallingBlockRow && col == this.fallingBlockCol;
  }

  hasFalling() {
    return this.fallingBlock !== null;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw new Error("There is a already falling block");
    }
    this.fallingBlock = block;
    this.fallingBlockRow = 0;
    this.fallingBlockCol = 1;
  }

  tick() {
    if (this.fallingBlockRow == this.height - 1) {
      this.stopFalling();
    } else {
      if (this.stationaryBlocks[this.fallingBlockRow + 1][this.fallingBlockCol] == this.EMPTY) {
        this.fallingBlockRow++;
      } else {
        this.stopFalling();
      } 
    }
  }

  stopFalling() {
    this.stationaryBlocks[this.fallingBlockRow][this.fallingBlockCol] = this.fallingBlock;
    this.fallingBlock = null;
  }
}
