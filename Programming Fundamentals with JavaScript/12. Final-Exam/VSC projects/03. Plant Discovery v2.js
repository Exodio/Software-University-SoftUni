function solve(input) {

    let numberInputs = Number(input.shift());
    let plantsObj = {};

    for (let i = 0; i < numberInputs; i++) {
        let [plantName, plantRarity] = input.shift().split("<->");
        plantRarity = Number(plantRarity);

        plantsObj[plantName] = {
            rarity: plantRarity,
            ratings: [],
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "Exhibition") {
        let [command, plant, arg2] = commandLine.split(/: | - /g);

        if (!plantsObj[plant]) {
            console.log("error");

            commandLine = input.shift();
            continue;
        }

        if (command === "Rate") {
            let rating = Number(arg2);
            plantsObj[plant].ratings.push(rating);

        } else if (command === "Update") {
            let newRarity = Number(arg2);
            plantsObj[plant].rarity = newRarity;

        } else if (command === "Reset") {
            plantsObj[plant].ratings = [];
        }

        commandLine = input.shift();
    }

    let plantsObjValues = Object.values(plantsObj);

    for (let obj of plantsObjValues) {
        let sum = 0;
        let ratingsLength = obj.ratings.length;

        for (let i = 0; i < obj.ratings.length; i++) {
            sum += obj.ratings[i];
        }
        obj.ratings = sum / (ratingsLength || 1);
    }

    let entriesArr = Object.entries(plantsObj);
    let sortedEntries = entriesArr.sort((a, b) => b[1].rarity - a[1].rarity || b[1].ratings - a[1].ratings);
    console.log("Plants for the exhibition:");

    for (const kvp of sortedEntries) {
        console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${kvp[1].ratings.toFixed(2)}`);
    }
}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

// solve([2,
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition",
// ]);