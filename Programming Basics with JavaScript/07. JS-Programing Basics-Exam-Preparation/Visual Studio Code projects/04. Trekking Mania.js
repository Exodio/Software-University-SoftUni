function solve(input) {
    let totalGroups = Number(input.shift());

    let peopleCountTotal = 0;

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimandjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for (let i = 1; i <= totalGroups; i++) {
        let peopleGroup = Number(input.shift());

        if (peopleGroup <= 5) {
            musalaGroup += peopleGroup;
        } else if (peopleGroup >= 6 && peopleGroup <= 12) {
            monblanGroup += peopleGroup;
        } else if (peopleGroup >= 13 && peopleGroup <= 25) {
            kilimandjaroGroup += peopleGroup;
        } else if (peopleGroup >= 26 && peopleGroup <= 40) {
            k2Group += peopleGroup;
        } else if (peopleGroup >= 41) {
            everestGroup += peopleGroup;
        }

        peopleCountTotal += peopleGroup;

        peopleGroup = Number(input);
    }

    console.log(`${(musalaGroup / peopleCountTotal * 100).toFixed(2)}%`);
    console.log(`${(monblanGroup / peopleCountTotal * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaroGroup / peopleCountTotal * 100).toFixed(2)}%`);
    console.log(`${(k2Group / peopleCountTotal * 100).toFixed(2)}%`);
    console.log(`${(everestGroup / peopleCountTotal * 100).toFixed(2)}%`);
    
}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
]);