function factorialDivision(numberOne, numberTwo) {

    let result = factorialCheck(numberOne) / factorialCheck(numberTwo);
    console.log(`${result.toFixed(2)}`);

    function factorialCheck(number) {

        if (number === 0) {
            return 1;
        } else {
            return (number * factorialCheck(number - 1));
        }
    }

}
factorialDivision(6, 2);