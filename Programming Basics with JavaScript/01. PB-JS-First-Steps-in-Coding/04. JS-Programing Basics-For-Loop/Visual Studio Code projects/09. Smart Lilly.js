function solve(input) {
    let age = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let singleToyPrice = Number(input.shift());

    let toysCount = 0;
    let moneySum = 0;
    
    let moneyIncome = 10;


    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toysCount++;

        } else {
            moneySum += moneyIncome;
            moneyIncome += 10;
            moneySum -= 1;

        }
    }
    moneySum += toysCount * singleToyPrice;
    if (washingMachinePrice < moneySum) {
        console.log(`Yes! ${(moneySum-washingMachinePrice).toFixed(2)}`);

    } else {
        console.log(`No! ${(washingMachinePrice-moneySum).toFixed(2)}`);

    }
}
solve([21,
    1570.98,
    3,
]);