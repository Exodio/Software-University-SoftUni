function moneyForFuelNeeded(travelDistance, passangersCount, oneLiterDiselPrice) {
    let requiredFuel = (travelDistance / 100) * 7;
    requiredFuel += passangersCount * 0.100;
    let neededMoney = requiredFuel * oneLiterDiselPrice;

    console.log(`Needed money for that trip is ${neededMoney}`);
}
moneyForFuelNeeded(260, 9, 2.49);