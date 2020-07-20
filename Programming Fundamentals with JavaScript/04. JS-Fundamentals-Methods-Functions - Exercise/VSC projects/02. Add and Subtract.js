function addOrSutractInput(numOne, numTwo, numThree) {
    let sum = sumOfFirstTwoNumbers(numOne, numTwo);
    let subtract = subtractionOfSum(sum, numThree);
    console.log(subtract);

    function sumOfFirstTwoNumbers(firstNumber, secondNumber) {
        return (firstNumber + secondNumber);
    }

    function subtractionOfSum(sumFirstTwoNumbers, thirdNumber) {
        return (sumFirstTwoNumbers - thirdNumber);
    }
}
addOrSutractInput(1,
    17,
    30
);

// function addOrSutractInput(numOne, numTwo, numThree) {
//     let result = "";
//     let combination = numOne + numTwo;
//     let subraction = combination - numThree;
//     result = subraction;
//     return result;
// }
// let resultOutput = addOrSutractInput(1,
//     17,
//     30
//     );
// console.log(resultOutput);