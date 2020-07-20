function solve(input1, operator, input2) {
    if (operator === "+") {
        console.log((input1 + input2).toFixed(2));
    } else if (operator === "-") {
        console.log((input1 - input2).toFixed(2));
    } else if (operator === "*") {
        console.log((input1 * input2).toFixed(2));
    } else if (operator === "/") {
        console.log((input1 / input2).toFixed(2));

    }
}
solve(5,
    '+',
    10
);