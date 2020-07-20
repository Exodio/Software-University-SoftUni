function toyShop(input) { //To run in judge we need to have place (...input) to indicate it as an array
    let vecayPrice = Number(input.shift());
    let puzzleCount = Number(input.shift());
    let dollCount = Number(input.shift());
    let bearCount = Number(input.shift());
    let minionCount = Number(input.shift());
    let truckCount = Number(input.shift());

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalMoneySumWithoutDisscount = 0;
    let sumAfterDisscount = 0;
    let endSum = 0;

    let moneyLeftPostRent = 0;
    let finalSum = 0;

    let leftOversOrNeededMoney = 0;


    let totalMoneySum = (puzzleCount * puzzlePrice) + (dollCount * dollPrice) + (bearCount * bearPrice) + (minionCount * minionPrice) + (truckCount * truckPrice);

    let toysSum = puzzleCount + dollCount + bearCount + minionCount + truckCount;

    if (toysSum >= 50) {
        endSum += totalMoneySum * 0.75;
        sumAfterDisscount = (totalMoneySum - endSum);
        moneyLeftPostRent += endSum - (endSum * 0.90);
        finalSum = endSum - moneyLeftPostRent;
    } else {
        totalMoneySumWithoutDisscount += totalMoneySum;
        moneyLeftPostRent += totalMoneySumWithoutDisscount - (totalMoneySumWithoutDisscount * 0.90);
        finalSum = totalMoneySumWithoutDisscount - moneyLeftPostRent;
    }

    if (finalSum >= vecayPrice) {
        leftOversOrNeededMoney += finalSum - vecayPrice;

        console.log(`Yes! ${leftOversOrNeededMoney.toFixed(2)} lv left.`)
    } else {
        leftOversOrNeededMoney = vecayPrice - finalSum;
        console.log(`Not enough money! ${leftOversOrNeededMoney.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", //second check also 100/100 (320,8,2,5,5,1)
    "20",
    "25",
    "30",
    "50",
    "10",
]);