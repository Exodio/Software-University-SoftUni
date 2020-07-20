function solve(input) {
    let n = Number(input.shift());

    let currentNumber = 1;

    while (n >= currentNumber) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;
    }

}
solve(["3"]);