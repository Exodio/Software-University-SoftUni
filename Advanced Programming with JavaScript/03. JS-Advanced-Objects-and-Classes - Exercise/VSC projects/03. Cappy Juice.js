function solve(input) {

    juiceObj = {};
    bottlesObj = {};

    for (const element of input) {
        let [juice, quantity] = element.split(" => ");

        if (!juiceObj.hasOwnProperty(juice)) {
            juiceObj[juice] = Number(quantity);
        } else {
            juiceObj[juice] += Number(quantity);
        }

        let bottles = Math.floor(juiceObj[juice] / 1000);
        if (bottles > 0) {
            bottlesObj[juice] = bottles;
        }
    }

    let result = Object.entries(bottlesObj);
    result.forEach(kvp => {
        console.log(`${kvp[0]} => ${kvp[1]}`);
    });
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);