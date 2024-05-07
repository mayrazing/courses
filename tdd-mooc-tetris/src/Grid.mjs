export class Grid {

    rows() {}

    columns() {}

    getBlockAt(row, col) {}

    static toString(grid) {
        let s = "";
        for (let i = 0; i < grid.rows(); i++) {
            for (let j = 0; j < grid.columns(); j++) {
                s += grid.getBlockAt(i, j);
            }
            s += "\n";
        }
        return s;
    }
}