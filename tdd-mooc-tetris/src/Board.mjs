export class Board {
  width;
  height;
  hasFalling = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (i == 0 && j == 1 && this.hasFalling) {
          s += "X";
        } else {
          s += ".";
        }
      }
      s += "\n";
    }
    return s;
  }

  drop() {
    this.hasFalling = true;
  }
}
