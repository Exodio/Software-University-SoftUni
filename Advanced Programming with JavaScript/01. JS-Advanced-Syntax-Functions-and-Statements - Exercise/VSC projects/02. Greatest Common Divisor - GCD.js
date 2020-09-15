function solve(firstNumber, secondNumber) {

    let a = firstNumber;
    let b = secondNumber;

    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    console.log(a);
}

solve(5, 15);