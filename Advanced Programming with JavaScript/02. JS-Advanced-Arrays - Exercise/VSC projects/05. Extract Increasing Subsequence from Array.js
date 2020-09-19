function solve(input) {

    let arrResult = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= arrResult[arrResult.length - 1] || arrResult[arrResult.length - 1] === undefined) {
            arrResult.push(input[i]);
        }
    }

    for (const eachElement of arrResult) {
        console.log(eachElement);
    }
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);