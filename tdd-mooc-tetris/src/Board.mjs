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
    this.startFalling(block);
  }

  startFalling(block) {
    this.fallingBlock = block;
    this.fallingBlockRow = 0;
    this.fallingBlockCol = 1;
  }

  tick() {
    const isAtBottom = this.fallingBlockRow == this.height - 1;
    const isBlockBelow = !isAtBottom && this.stationaryBlocks[this.fallingBlockRow + 1][this.fallingBlockCol] != this.EMPTY;
    if (isAtBottom || isBlockBelow) {
      this.stopFalling();
    } else if (!isAtBottom) {
      this.fallingBlockRow++;
    }
  }

  stopFalling() {
    this.stationaryBlocks[this.fallingBlockRow][this.fallingBlockCol] = this.fallingBlock;
    this.fallingBlock = null;
  }
}
