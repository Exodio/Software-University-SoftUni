function orbit(input) {

    let rowsWidth = Number(input.shift());
    let colsHeight = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    let matrix = [];

    for (let i = 0; i < rowsWidth; i++) {
        matrix.push([]);
    }

    for (let rows = 0; rows < rowsWidth; rows++) {
        for (let cols = 0; cols < colsHeight; cols++) {
            matrix[rows][cols] = Math.max(Math.abs(rows - x), Math.abs(cols - y)) + 1;
        }

    }

    console.log(matrix.map(eachRow => eachRow.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0]);