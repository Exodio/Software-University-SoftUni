function solve(input) {
    let n = Number(input.shift());

    let counter = 0;
    let MinNum = Number.MAX_SAFE_INTEGER;

    while (counter < n) {
        let number = Number(input.shift());

        if (number < MinNum) {
            Min = number;
        }

        counter++;
    }

    console.log(MinNum);
}
solve(["2",
    "100",
    "99"
]);