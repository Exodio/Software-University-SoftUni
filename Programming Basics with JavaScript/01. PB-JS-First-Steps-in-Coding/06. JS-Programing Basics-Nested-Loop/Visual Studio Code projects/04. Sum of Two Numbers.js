function solve(input) {

    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());

    let combinationCounter = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j < end; j++) {

            combinationCounter++;

            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);

}
solve([23,
    24,
    20,
]);