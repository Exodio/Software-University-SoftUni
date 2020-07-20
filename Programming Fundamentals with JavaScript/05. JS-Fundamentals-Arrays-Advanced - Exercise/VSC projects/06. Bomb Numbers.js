function solve(arrSequenceInput, arrBombInput) {
    let bombLocation = arrBombInput[0];
    let bombRange = arrBombInput[1];

    let currentIndex = arrSequenceInput.indexOf(bombLocation);

    while (currentIndex > -1) {
        arrSequenceInput.splice(Math.max((currentIndex - bombRange), 0), Math.min(bombRange, currentIndex));

        currentIndex = arrSequenceInput.indexOf(bombLocation);

        arrSequenceInput.splice(currentIndex, (bombRange + 1));

        currentIndex = arrSequenceInput.indexOf(bombLocation);
    }

    console.log(postBombSum(arrSequenceInput));

    function postBombSum(leftInArr) {
        let sum = 0;
        for (let numbers of leftInArr) {
            sum += numbers;
        }

        return sum;
    }

}
solve([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);