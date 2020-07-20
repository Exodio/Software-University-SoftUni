function solve(arrNumbers) {
    let firstNumber = Number(arrNumbers[0]);
    let lastNumber = Number(arrNumbers.pop());
    let result = firstNumber + lastNumber;

    return result;
}
let resultOutput = solve(['20', '30', '40']);
console.log(resultOutput);