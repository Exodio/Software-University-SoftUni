function mergeArrays(arrOne, arrTwo) {
    let resultArrThree = [];

    for (let indexOfEachArr in arrOne) {
        let operationResult = "";

        if (indexOfEachArr % 2 === 0) {
            operationResult = Number(arrOne[indexOfEachArr]) + Number(arrTwo[indexOfEachArr]);
        } else {
            operationResult = arrOne[indexOfEachArr] + arrTwo[indexOfEachArr];
        }
        resultArrThree.push(operationResult);
    }
    console.log(resultArrThree.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);