function solve(arrRangeInput, arrInfoInput) {
    let elementsTaken = arrRangeInput.slice(0, arrInfoInput[0]);
    elementsTaken.splice(0, arrInfoInput[1]); //The elements that would need to be deleted from the numbers we initially took
    let elementInSearch = arrInfoInput[2];
    let numsOccurCounter = 0;

    for (let i = 0; i < elementsTaken.length; i++) {

        if (elementsTaken[i] === elementInSearch) {
            numsOccurCounter++
        }
    }
    console.log(`Number ${elementInSearch} occurs ${numsOccurCounter} times.`);

}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);