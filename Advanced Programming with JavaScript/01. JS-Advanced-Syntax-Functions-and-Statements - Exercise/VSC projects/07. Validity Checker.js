function solve(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    if (Number.isInteger(distanceValidator(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceValidator(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceValidator(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function distanceValidator(x1, y1, x2, y2) {
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;

        let result = Math.sqrt(Math.pow(distanceX, 2) + distanceY ** 2); //Pow is the same as the exponentiation operator(**), but it can accept BigInts as operands 

        return result;
    }
}

solve([3, 0, 0, 4]);