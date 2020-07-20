function solve(input) {
    let n = Number(input.shift());

    let counter = 0;
    let MaxNum = Number.MIN_SAFE_INTEGER;

    while (n > counter) {
        let number = Number(input.shift());

        if (number > MaxNum) {
            MaxNum = number;
        }
        counter++;
    }

    console.log(MaxNum);
}

solve(["2",
    "100",
    "99",
]);