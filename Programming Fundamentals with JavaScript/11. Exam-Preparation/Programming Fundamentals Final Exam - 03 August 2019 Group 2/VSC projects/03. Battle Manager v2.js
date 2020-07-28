function battleManager(input) {

    let recordsObj = {};

    for (const eachLine of input) {
        let command = eachLine.split(":");

        if (command[0] === "Results") {
            break;
        }

        switch (command[0]) {
            case "Add":

                if (recordsObj.hasOwnProperty([command[1]])) {
                    recordsObj[command[1]].health += Number(command[2]);
                } else {
                    recordsObj[command[1]] = {
                        health: Number(command[2]),
                        energy: Number(command[3]),
                    };
                }
                break;

            case "Attack":

                if (recordsObj.hasOwnProperty(command[1]) && recordsObj.hasOwnProperty(command[2])) {
                    recordsObj[command[2]].health -= Number(command[3]);
                    recordsObj[command[1]].energy -= 1;

                    if (recordsObj[command[2]].health <= 0) {
                        delete recordsObj[command[2]];

                        console.log(`${command[2]} was disqualified!`);
                    }

                    if (recordsObj[command[1]].energy <= 0) {
                        delete recordsObj[command[1]];

                        console.log(`${command[1]} was disqualified!`);
                    }
                }
                break;

            case "Delete":

                if (command[1] === "All") {
                    recordsObj = {}; //The current object is equal to a new one(empty new object)- we delete all records in our object
                } else {
                    delete recordsObj[command[1]]; //We delete the specified personName found in the object records
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