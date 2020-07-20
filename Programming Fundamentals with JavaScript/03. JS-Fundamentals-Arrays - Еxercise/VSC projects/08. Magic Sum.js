function magicSum(arr, goalSumNumber) {
    let arrInput = arr;
    let wantedNumber = goalSumNumber;
    let endResult = [];

    for (let i = 0; i < arrInput.length; i++) {
        let currentElement = arrInput[i];

        for (let j = i + 1; j < arrInput.length; j++) {
            let nextElement = arrInput[j];
            let magicSumEqualityWanted = (currentElement + nextElement) === wantedNumber;

            if (magicSumEqualityWanted) {
                endResult.push(`${currentElement} ${nextElement}`); //We have between the two numbers in order to recive the appropraite output
            }
        }
    }
    console.log(endResult.join('\n')); // Function \n  -leads to a new line in the output result

}
magicSum([1, 7, 6, 2, 19, 23],
    8
);