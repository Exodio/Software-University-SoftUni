function pirates(input) {

    let sailIndex = input.indexOf("Sail");
    let endIndex = input.indexOf("End");
    let citiesInput = input.slice(0, sailIndex);

    let recordsObj = {};

    for (const eachTown of citiesInput) {
        let [townName, people, gold] = eachTown.split("||");

        if (!recordsObj[townName]) {
            recordsObj[townName] = {
                people: 0,
                gold: 0,
                isNotDisbanded: true // we clarify if the town still exists(which is determined if there is more people to be killed and gold to be obtained)
            };
        }

        recordsObj[townName].people += Number(people);
        recordsObj[townName].gold += Number(gold);
    }

    let eventsInput = input.slice(sailIndex + 1, endIndex);

    for (const eachEvent of eventsInput) {
        let [command, town, firstArgument, secondArgument] = eachEvent.split("=>");

        if (command === "Plunder") {
            let peopleKilled = Number(firstArgument);
            let stolenGold = Number(secondArgument);

            if (recordsObj[town]) { //If our records have the town in mind
                recordsObj[town].people -= peopleKilled;
                recordsObj[town].gold -= stolenGold;
                console.log(`${town} plundered! ${stolenGold} gold stolen, ${peopleKilled} citizens killed.`);

                if (recordsObj[town].people <= 0 || recordsObj[town].gold <= 0) {
                    recordsObj[town].isNotDisbanded = false; //We remove the town without deleting it, by using the above listed bool in our initial object creation
                    console.log(`${town} has been wiped off the map!`);
                }
            }

        } else if (command === "Prosper") {
            let increasedGold = Number(firstArgument);

            if (increasedGold >= 0) {
                recordsObj[town].gold += increasedGold;
                console.log(`${increasedGold} gold added to the city treasury. ${town} now has ${recordsObj[town].gold} gold.`);
            } else { //If we receive a negative increasedGold number 
                console.log("Gold added cannot be a negative number!");
            }
        }
    }

    let citiesLeftInRecords = Object.keys(recordsObj) //We make an arr of strings by using keys opperator
        .filter((townName) => recordsObj[townName].isNotDisbanded === true); //And each key/value is valid in our object, and we take each town which is left in our records

    if (citiesLeftInRecords.length > 0) {
        console.log(`Ahoy, Captain! There are ${citiesLeftInRecords.length} wealthy settlements to go to:`);

        let sortedCities = citiesLeftInRecords.sort((a, b) => recordsObj[b].gold - recordsObj[a].gold || a.localeCompare(b));

        for (let town of sortedCities) {
            let population = recordsObj[town].people;
            let golds = recordsObj[town].gold;
            console.log(`${town} -> Population: ${population} citizens, Gold: ${golds} kg`);
        }

    } else { //If there is not a single town in our records that has not been processed
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
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