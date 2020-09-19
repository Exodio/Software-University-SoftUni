function solve(input) {

    let n = input.pop();

    for (i = 0; i < input.length; i++) {
        if (i % n === 0) {
            console.log(input[i]);
        }
    }
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);