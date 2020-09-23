function solve(input) {

    let townObj = {};

    for (const eachLine of input) {
        let [townName, townPopulation] = eachLine.split(" <-> ");

        if (townObj.hasOwnProperty(townName)) {
            townObj[townName] = townObj[townName] + Number(townPopulation);
        } else {
            townObj[townName] = Number(townPopulation);
        }
    }

    for (const kvp in townObj) {
        console.log(`${kvp} : ${townObj[kvp]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);