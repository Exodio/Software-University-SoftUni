function solve(arrInput) {
    let result = [];
    let initialLength = arrInput.sort((a, b) => a - b);

    while (initialLength.length !== 0) {
        let biggestNum = initialLength.pop();
        let smallestNum = initialLength.shift();
        result.push(biggestNum, smallestNum);
    }
    console.log(result.join(" "));

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);