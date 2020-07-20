function mathPow(number, power) {
    let numberInput = number;
    let powerInputNumber = power;

    let result = Math.pow(numberInput, powerInputNumber);
    return result;
}
let resultOutput = mathPow(2, 8);
console.log(resultOutput);