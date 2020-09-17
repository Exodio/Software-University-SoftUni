function solve(input) {

    let firstIndex = 0;
    let secondIndex = input.length - 1;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    input.forEach(array => {
        firstDiagonalSum += Number(array[firstIndex++]);
        secondDiagonalSum += Number(array[secondIndex--]);
    });

    console.log(firstDiagonalSum + " " + secondDiagonalSum);
}

solve([
    [20, 40],
    [10, 60]
]);