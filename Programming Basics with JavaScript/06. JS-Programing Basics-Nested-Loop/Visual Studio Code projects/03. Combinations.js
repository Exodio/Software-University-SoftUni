function solve(input) {

    let n = Number(input);
    let validCombinationCounter = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                let combinationSum = i + j + k;

                if (combinationSum === n) {
                    validCombinationCounter++;
                }
            }
        }
    }
    console.log(validCombinationCounter);

}
solve(25);