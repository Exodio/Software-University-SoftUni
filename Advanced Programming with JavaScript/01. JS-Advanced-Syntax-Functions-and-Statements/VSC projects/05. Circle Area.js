function solve(argument) {

    let argmentType = typeof(argument);

    if (argmentType === "number") {
        let result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argmentType}.`)
    }
}

solve(5);