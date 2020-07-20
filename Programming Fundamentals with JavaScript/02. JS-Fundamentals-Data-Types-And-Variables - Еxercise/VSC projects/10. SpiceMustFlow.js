function solve(startingYield) {
    let mineOperationDays = 0;
    let yieldsLeft = 0;

    while (startingYield >= 100) {
        mineOperationDays++;
        yieldsLeft += startingYield - 26;
        startingYield -= 10;
    }
    if (startingYield < 100 && mineOperationDays === 0) {
        console.log(mineOperationDays);
        console.log(yieldsLeft);
    } else {
        yieldsLeft -= 26;
        console.log(mineOperationDays);
        console.log(yieldsLeft);
    }

}
solve(111);