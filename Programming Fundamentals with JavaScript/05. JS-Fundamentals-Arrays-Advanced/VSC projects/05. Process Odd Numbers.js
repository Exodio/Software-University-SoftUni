function solve(arrInput) {
    let numbers = arrInput;

    let oddNumbersResult = [];
    let reversedOddDoubledNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            oddNumbersResult.push(numbers[i]);
        }
    }

    for (let i = oddNumbersResult.length - 1; i >= 0; i--) {
        reversedOddDoubledNumbers.push(oddNumbersResult[i] * 2);
    }
    console.log(reversedOddDoubledNumbers.join(" "));

}
solve([3, 0, 10, 4, 7, 3]);