function battleManager(input) {

    let recordsObj = {};

    for (const eachLine of input) {
        let splittedLine = eachLine.split(":");
        let command = splittedLine[0];
        let personName = splittedLine[1];
        let personHealth = splittedLine[2];
        let personEnergy = splittedLine[3];

        if (command === "Results") {
            break;
        }

        switch (command) {
            case "Add":

                if (recordsObj.hasOwnProperty([personName])) {
                    recordsObj[personName].health += Number(personHealth);
                } else {
                    recordsObj[personName] = {
                        health: Number(personHealth),
                        energy: Number(personEnergy),
                    };
                }
                break;

            case "Attack":

                if (recordsObj.hasOwnProperty(personName) && recordsObj.hasOwnProperty(personHealth)) {
                    recordsObj[personHealth].health -= Number(personEnergy);
                    recordsObj[personName].energy -= 1;

                    if (recordsObj[personHealth].health <= 0) {
                        delete recordsObj[personHealth];

                        console.log(`${personHealth} was disqualified!`);
                    }

                    if (recordsObj[personName].energy <= 0) {
                        delete recordsObj[personName];

                        console.log(`${personName} was disqualified!`);
                    }
                }
                break;

            case "Delete":

                if (personName === "All") {
                    recordsObj = {}; //The current object is equal to a new one(empty new object)- we delete all records in our object
                } else {
                    delete recordsObj[personName]; //We delete the specified personName found in the object records
                }
                break;
        }
    }

    let entries = Object.entries(recordsObj);
    let peopleTotal = entries.length;
    let sortedEntries = entries.sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0]));

    
    console.log(`People count: ${peopleTotal}`);
    sortedEntries.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1].health} - ${kvp[1].energy}`);
    });
}

battleManager([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);