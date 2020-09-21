function spiralMatrix(input) {

    let matrix = [];

    for (let i = 0; i < input; i++) {
        matrix.push([]);
    }

    let dimensions = input * input;
    let action = 0;
    let x = 0;
    let y = 0;

    for (let step = 0; step < dimensions;) {
        while (y + action < input) {
            step++;
            matrix[x][y] = step;
            y++;
        }
        y--;
        x++;

        while (x + action < input) {
            step++;
            matrix[x][y] = step;
            x++;
        }
        x--;
        y--;

        while (y >= action) {
            step++;
            matrix[x][y] = step;
            y--;
        }
        y++;
        x--;
        action++;

        while (x >= action) {
            step++;
            matrix[x][y] = step;
            x--;
        }
        x++;
        y++;
    }

    matrix.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(5, 5);