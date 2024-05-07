export class Grid {

    rows() {}

    getBlockAt(row, col) {}

    static toString(grid) {
        let s = "";
        for (let i = 0; i < grid.rows(); i++) {
            for (let j = 0; j < grid.width; j++) {
                s += grid.getBlockAt(i, j);
            }
            s += "\n";
        }
        return s;
    }
}