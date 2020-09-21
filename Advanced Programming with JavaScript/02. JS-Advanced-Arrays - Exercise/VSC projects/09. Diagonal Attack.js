function diagonalAttack(input) {

    let matrix = input.map(row => row.split(" ").map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;


    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
    }

    for (let j = 0; j < matrix.length; j++) {
        secondDiagonalSum += matrix[j][matrix.length - 1 - j];
    }

    if (firstDiagonalSum === secondDiagonalSum) {
        for (let k = 0; k < matrix.length; k++) {
            for (let l = 0; l < matrix.length; l++) {
                if (k !== l && k !== matrix.length - 1 - l) {
                    matrix[k][l] = firstDiagonalSum;
                }

            }
        }
        printResult(matrix);
    } else {
        printResult(matrix);
    }

    function printResult(matrixInput) {
        for (let i = 0; i < matrixInput.length; i++) {
            console.log(matrixInput[i].join(" "));
        }
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);