function solve(input) {

    let resultArr = [];

    for (const row in input) {
        let rowSum = input[row].reduce((a, b) => a + b, 0);
        let columnSum = input.reduce((acc, el) => {
            acc += el[row];
            return acc;
        }, 0);

        if (rowSum !== columnSum || (resultArr.length > 0 && (rowSum !== resultArr[0] || columnSum !== resultArr[1]))) { //We compare the resultArr with the upcoming rows and cols
            console.log("false");
            return;
        } else if (row === "0") { //We add the comparison row and colum to the resultArr
            resultArr.push(rowSum, columnSum);
        }
    }

    console.log("true");
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);