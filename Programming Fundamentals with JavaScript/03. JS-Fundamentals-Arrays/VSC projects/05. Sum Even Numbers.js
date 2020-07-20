function sumOfEvenNumbers(stringsArr) {
    sumOfNumbers = 0;

    for (let i = 0; i < stringsArr.length; i++) {
        stringsArr[i] = Number(stringsArr[i]);
    }
    for (numbers of stringsArr) {
        if (numbers % 2 === 0) {
            sumOfNumbers += numbers;
        }
    }
    console.log(sumOfNumbers);

}
sumOfEvenNumbers(['1', '2', '3', '4', '5', '6']);