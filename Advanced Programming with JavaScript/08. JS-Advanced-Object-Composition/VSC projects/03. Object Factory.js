function solve(input) {

    let parsedInput = JSON.parse(input);
    let result = Object.assign({}, ...parsedInput);

    return result;
}

console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));