function solve(input) {
    let transactionsNeeded = Number(input.shift());

    let currentBalance = 0;
    let transactionCounter = 1;

    while (transactionsNeeded >= transactionCounter) {
        let amountInserted = Number(input.shift());
        if (amountInserted <= 0) {
            console.log("Invalid operation!");
            break;
        }
        currentBalance += amountInserted;

        console.log(`Increase: ${amountInserted.toFixed(2)}`);

        transactionCounter++;
    }
    
    console.log("Total: " + currentBalance.toFixed(2));
}
solve(["3",
    "5.51",
    "69.42",
    "100",
])