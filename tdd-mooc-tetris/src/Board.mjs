export class Board {
  EMPTY = ".";

  width;
  height;
  hasFalling = false;
  fallingBlock = null;
  fallingBlockRow = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        s += this.hasFallingAt(i, j) ? this.fallingBlock : this.EMPTY;
      }
      s += "\n";
    }
    return s;
  }

  hasFallingAt(row, col) {
    return this.hasFalling && row == this.fallingBlockRow && col == 1;
  }

  drop(block) {
    this.hasFalling = true;
    this.fallingBlock = block;
  }

  tick() {
    this.fallingBlockRow++;
  }
}
