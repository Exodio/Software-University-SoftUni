function solve(ArrayInput) {

    let bitcoinPrice = 11949.16;
    let gramOfGoldPrice = 67.51;

    let daysCounter = 0;
    let singleDayEarning = 0;
    let totalSumInGold = 0;
    let boughtBitcoinCount = 0;
    let boughtBitcoins = 0;
    let bitcoinsSum = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < ArrayInput.length; i++) {
        daysCounter++;

        let elementsOfInput = ArrayInput[i];

        if (daysCounter % 3 === 0) {
            elementsOfInput *= 0.7;
        }
        singleDayEarning = elementsOfInput * gramOfGoldPrice;
        totalSumInGold += singleDayEarning;

        if (totalSumInGold >= bitcoinPrice) {
            boughtBitcoinCount++;

            boughtBitcoins = Math.floor(totalSumInGold / bitcoinPrice);
            totalSumInGold -= bitcoinPrice * boughtBitcoins;
            bitcoinsSum += boughtBitcoins;
        }
        if (boughtBitcoinCount === 1) {
            firstBitcoinDay = daysCounter;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsSum}`);

    if (firstBitcoinDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${totalSumInGold.toFixed(2)} lv.`);

}
solve([100, 200, 300]);