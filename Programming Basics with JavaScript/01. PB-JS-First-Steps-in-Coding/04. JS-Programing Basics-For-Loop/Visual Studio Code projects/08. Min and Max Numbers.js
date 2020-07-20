function solve(input) {
    let number = Number(input.shift());

    let minNumber = Number.MAX_SAFE_INTEGER;;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < number; i++) {
        let currentNumber = Number(input.shift());
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }

    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}
solve(["5",
    "10",
    "20",
    "304",
    "0",
    "50"
]);