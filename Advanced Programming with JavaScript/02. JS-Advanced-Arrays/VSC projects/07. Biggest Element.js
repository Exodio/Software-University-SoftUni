function solve(input) {

    let largestNumber = Number.MIN_SAFE_INTEGER;

    for (i = 0; i < input.length; i++) {

        input[i].sort((a, b) => a - b).forEach(element => {

            if (largestNumber < element) {
                largestNumber = element;
            }
        });
    }

    console.log(largestNumber);
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);