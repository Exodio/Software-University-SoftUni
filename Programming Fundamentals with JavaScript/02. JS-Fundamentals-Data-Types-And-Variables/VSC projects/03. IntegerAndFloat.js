function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
    let numbersSum = firstNumber + secondNumber + thirdNumber;

    if (numbersSum % 1 === 0) {
        console.log(`${numbersSum} - Integer`);
    } else {
        console.log(`${numbersSum} - Float`);
    }
}
integerAndFloat(9, 100, 1.1);