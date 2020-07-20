function calculator(numOne, numTwo, operator) {
    if (operator === "multiply") {
        let multiplication = (numOne, numTwo) => numOne * numTwo;
        console.log(multiplication(numOne, numTwo));
    } else if (operator === "divide") {
        let division = (numOne, numTwo) => numOne / numTwo;
        console.log(division(numOne, numTwo));
    } else if (operator === "add") {
        let adding = (numOne, numTwo) => numOne + numTwo;
        console.log(adding(numOne, numTwo));
    } else if (operator === "subtract") {
        let removing = (numOne, numTwo) => numOne - numTwo;
        console.log(removing(numOne, numTwo));
    }

}
calculator(5, 5, "multiply");