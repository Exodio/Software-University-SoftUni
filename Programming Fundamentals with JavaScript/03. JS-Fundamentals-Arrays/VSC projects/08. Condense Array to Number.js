function condense(arrayOfNumbers) {
    let condensedNumbers = arrayOfNumbers;

    while (condensedNumbers.length > 1) {
        let tempArrOfCondensedNumbers = [];

        for (let i = 0; i < condensedNumbers.length - 1; i++) {
            tempArrOfCondensedNumbers[i] = condensedNumbers[i] + condensedNumbers[i + 1];
        }
        
        condensedNumbers = tempArrOfCondensedNumbers;
    }
    console.log(condensedNumbers[0]);

}
condense([2, 10, 3]);