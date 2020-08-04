function pirates(input) {

    let commandInput = input.shift();
    let recordsObj = {};

    while (commandInput !== "Sail") {
        let [city, population, gold] = commandInput.split("||");

        if (!recordsObj[city]) {
            recordsObj[city] = {
                population: 0,
                gold: 0,
            };
        }
        recordsObj[city].population += Number(population);
        recordsObj[city].gold += Number(gold);

        commandInput = input.shift();
    }

    let recordsInput = input.shift();

    while (recordsInput !== "End") {
        let [command, town, arg1, arg2] = recordsInput.split("=>");

        switch (command) {
            case "Plunder":
                let killedPeople = Number(arg1);
                let gainedGold = Number(arg2);

                if (recordsObj[town]) {
                    recordsObj[town].population -= killedPeople;
                    recordsObj[town].gold -= gainedGold;
                    console.log(`${town} plundered! ${gainedGold} gold stolen, ${killedPeople} citizens killed.`);

                    if (recordsObj[town].population <= 0 || recordsObj[town].gold <= 0) {
                        delete recordsObj[town];
                        console.log(`${town} has been wiped off the map!`);
                    }
                }
                break;

            case "Prosper":
                let goldIncrease = Number(arg1);

                if (goldIncrease <= 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    recordsObj[town].gold += goldIncrease;
                    console.log(`${goldIncrease} gold added to the city treasury. ${town} now has ${recordsObj[town].gold} gold.`);
                }
                break;
        }

        recordsInput = input.shift();
    }

    let objectKeyEntries = Object.keys(recordsObj);
    let sortedKeyEntries = objectKeyEntries.sort((a, b) => recordsObj[b].gold - recordsObj[a].gold || a.localeCompare(b));

    console.log(`Ahoy, Captain! There are ${objectKeyEntries.length} wealthy settlements to go to:`);
    for (const kvp of sortedKeyEntries) {
        console.log(`${kvp} -> Population: ${recordsObj[kvp].population} citizens, Gold: ${recordsObj[kvp].gold} kg`);
    }
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);