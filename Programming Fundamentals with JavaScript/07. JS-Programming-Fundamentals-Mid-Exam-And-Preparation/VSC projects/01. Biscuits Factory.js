function solve(input1, input2, input3) { //To be taken in judge you would need to submit it as an arr[]
    let buscuitsPerDay = input1;
    let workersCount = input2;
    let competatorTotal = input3;

    let biscuitsPerMonth = 0;
    let daysCount = 30;

    for (let i = 1; i <= daysCount; i++) {
        if (i % 3 === 0) {
            biscuitsPerMonth += Math.floor((buscuitsPerDay * workersCount) * 0.75);
        } else {
            biscuitsPerMonth += buscuitsPerDay * workersCount;
        }
    }
    let monhtlyCompare = biscuitsPerMonth - competatorTotal;
    let difference = (Math.abs(monhtlyCompare) / competatorTotal) * 100;

    if (biscuitsPerMonth > competatorTotal) {
        console.log(`You have produced ${biscuitsPerMonth} biscuits for the past month.`);
        console.log(`You produce ${(difference.toFixed(2))} percent more biscuits.`);
    } else {
        console.log(`You have produced ${biscuitsPerMonth} biscuits for the past month.`);
        console.log(`You produce ${difference.toFixed(2)} percent less biscuits.`);
    }

}
solve(65, 12, 26000);