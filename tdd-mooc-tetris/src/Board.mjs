export class Board {
  EMPTY = ".";

  width;
  height;
  stationaryBlocks = [];
  hasFalling = false;
  fallingBlock = null;
  fallingBlockRow = 0;

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
    return this.hasFalling && row == this.fallingBlockRow && col == 1;
  }

  drop(block) {
    if (this.hasFalling) {
      throw new Error("There is a already falling block");
    }
    this.hasFalling = true;
    this.fallingBlock = block;
  }

  tick() {
    this.fallingBlockRow++;
  }
}
