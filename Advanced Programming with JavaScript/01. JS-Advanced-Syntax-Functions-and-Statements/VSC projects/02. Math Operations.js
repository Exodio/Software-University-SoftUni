function solve(int1, int2, stringOperator) {

    let result = 0;

    switch (stringOperator) {
        case "+":
            result = int1 + int2;
            break;
        case "-":
            result = int1 - int2;
            break;
        case "*":
            result = int1 * int2;
            break;
        case "/":
            result = int1 / int2;
            break;
        case "%":
            result = int1 % int2;
            break;
        case "**":
            result = int1 ** int2;
            break;
    }

    console.log(result);
}

solve(5, 6, '+');