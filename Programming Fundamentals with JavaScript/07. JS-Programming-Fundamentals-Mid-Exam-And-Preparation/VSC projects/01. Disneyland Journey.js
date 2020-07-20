function solve(input) {
    let neededMoney = Number(input.shift());
    let neededMonths = Number(input.shift());
    let savedMoney = 0;

    for (let i = 1; i <= neededMonths; i++) {

        if (i % 2 !== 0 && i !== 1) {
            savedMoney -= savedMoney * 0.16;
            savedMoney += neededMoney * 0.25;
        } else if (i % 4 === 0) {
            savedMoney += savedMoney * 0.25;
            savedMoney += neededMoney * 0.25;
        } else {
            savedMoney += neededMoney * 0.25;
        }
    }
    if (savedMoney >= neededMoney) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - neededMoney).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(neededMoney - savedMoney).toFixed(2)}lv. more.`);
    }

}
solve([3265,
    3
]);