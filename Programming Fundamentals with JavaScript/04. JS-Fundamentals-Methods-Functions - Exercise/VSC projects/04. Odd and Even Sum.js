function oddEvenSum(numberInput) {

    let oddDigitsSum = oddNumberSum(numberInput);
    let evenDigitsSum = evenNumberSum(numberInput);

    let oddSums = digitArrResults(oddDigitsSum);
    let evenSums = digitArrResults(evenDigitsSum);
    console.log(`Odd sum = ${oddSums}, Even sum = ${evenSums}`);


    function oddNumberSum(number) {
        let oddDigitsResult = [];

        while (number > 0) {
            let lastDigitOfNumber = number % 10;
            let oddDigitCheck = lastDigitOfNumber % 2;

            if (oddDigitCheck !== 0) {
                oddDigitsResult.push(lastDigitOfNumber);
            }
            let nextDigitCheck = number / 10;
            number = Math.trunc(nextDigitCheck);
        }

        return oddDigitsResult;
    }

    function evenNumberSum(number) {
        let evenDigitsResult = [];

        while (number > 0) {
            let lastDigitOfNumber = number % 10;
            let evenDigitCheck = lastDigitOfNumber % 2;

            if (evenDigitCheck === 0) {
                evenDigitsResult.push(lastDigitOfNumber);
            }
            let nextDigitCheck = number / 10;
            number = Math.trunc(nextDigitCheck);
        }
        return evenDigitsResult;
    }

    function digitArrResults(arrResult) {
        inputSum = 0;
        for (let numberInput of arrResult) {
            inputSum += numberInput;
        }
        return inputSum;
    }

}
oddEvenSum(1000435);