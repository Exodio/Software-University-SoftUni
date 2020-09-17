function equalNeighbors(input) {

    let equalNeighborsCount = 0;
    
    input.forEach((array, row) => { //each array and current row
        array.forEach((element, column) => { //each element and current column

            if (element === array[column + 1]) { // if the next element is in the current row //2 = 3?
                equalNeighborsCount++;
            }

            if (input[row + 1] && input[row + 1][column] === element) { // if the element on the next row under the same column has the same position //2 = 4?
                equalNeighborsCount++;
            }
        });
    });

    console.log(equalNeighborsCount);
}

equalNeighbors([
    ['2', '3', '4', '7', '0'], //2 = 3?; 3 = 4?; 4 = 7?; 7 = 0?;
    ['4', '0', '5', '3', '4'], //2 = 4?; 3 = 0?; 4 = 5?; 7 = 3?; 0 = 4?;
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
]);