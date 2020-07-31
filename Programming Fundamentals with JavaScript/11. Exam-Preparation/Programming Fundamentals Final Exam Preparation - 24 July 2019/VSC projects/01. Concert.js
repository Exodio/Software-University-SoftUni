function solve(input) {

    let bandName = input.pop();
    let bandObj = {};
    let timeCount = 0;

    for (let eachLine of input) {

        if (eachLine === "start of concert") {
            break;
        }

        let command = eachLine.split("; ");

        switch (command[0]) {

            case "Add":
                if (!bandObj.hasOwnProperty(command[1])) {
                    bandObj[command[1]] = {
                        add: command[2],
                        play: 0,
                    };
                } else {
                    let membersList = command[2].split(", ");

                    for (let eachMember of membersList) {
                        if (!bandObj[command[1]].add.includes(eachMember)) {
                            bandObj[command[1]].add += `, ${eachMember}`;
                        }
                    }
                }
                break;

            case "Play":
                if (!bandObj.hasOwnProperty(command[1])) {
                    bandObj[command[1]] = {
                        add: "",
                        play: Number(command[2])
                    };
                } else {
                    bandObj[command[1]].play += Number(command[2]);
                }
                timeCount += Number(command[2]);
                break;
        }
    }

    let sortedObjEntries = Object.entries(bandObj);
    sortedObjEntries.sort((a, b) => b[1].play - a[1].play || a[0].localeCompare(b[0]));

    console.log(`Total time: ${timeCount}`);
    sortedObjEntries.forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1].play}`);
    });

    for (let kvp of sortedObjEntries) {

        if (kvp[0] === bandName) {
            console.log(bandName);

            let members = kvp[1].add.split(", ");

            for (let person of members) {
                console.log(`=> ${person}`);
            }
        }
    }
}

solve([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]);