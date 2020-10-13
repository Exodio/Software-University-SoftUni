function solve(input) {

    let parsedInput = JSON.parse(input);
    let result = Object.assign({}, ...parsedInput); //let result = parsedInput.reduce((acc, x) => ({...acc, ...x}), {});

    return result;
}

console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));