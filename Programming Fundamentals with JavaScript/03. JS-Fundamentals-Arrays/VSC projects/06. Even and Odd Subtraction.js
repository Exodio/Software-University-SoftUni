function evenOddSubraction(arrStringOfNumbers) {
    evenNumbersSum = 0;
    oddNumbersSum = 0;

    for (let i = 0; i < arrStringOfNumbers.length; i++) {
        arrStringOfNumbers[i] = Number(arrStringOfNumbers[i]);
    }
    for (numbers of arrStringOfNumbers) {
        if (numbers % 2 === 0) {
            evenNumbersSum += numbers;
        } else {
            oddNumbersSum += numbers;
        }
    }
    console.log(evenNumbersSum - oddNumbersSum);

}
evenOddSubraction(['1', '2', '3', '4', '5', '6']);