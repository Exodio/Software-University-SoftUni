function solve(input) {

    let friendList = input.shift().split(", ");
    let blacklistCount = 0;
    let lostlistCount = 0;

    for (let i = 0; i < input.length; i++) {
        let eachCommand = input[i].split(" ");
        let command = eachCommand[0];

        if (command === "Report") {
            break;
        }

        if (command === "Blacklist") {
            let nameCheck = eachCommand[1];

            if (friendList.includes(nameCheck)) {
                let indexCheck = friendList.indexOf(nameCheck);
                friendList.splice(indexCheck, 1, "Blacklisted");

                console.log(`${nameCheck} was blacklisted.`);
                blacklistCount++;
            } else {
                console.log(`${nameCheck} was not found.`);
            }
        }

        if (command === "Error") {
            let nameIndex = friendList[Number(eachCommand[1])];

            if (nameIndex !== "Blacklisted" && nameIndex !== "Lost") {
                let indexCheck = friendList.indexOf(nameIndex);
                friendList.splice(indexCheck, 1, "Lost");

                console.log(`${nameIndex} was lost due to an error.`);
                lostlistCount++;
            }
        }

        if (command === "Change") {
            let indexPosition = Number(eachCommand[1]);
            let newName = eachCommand[2];
            let currentName = friendList[indexPosition];

            if (friendList.length > indexPosition && indexPosition >= 0) {
                friendList.splice(indexPosition, 1, newName);

                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }

    }
    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostlistCount}`);
    console.log(`${friendList.join(" ")}`);

}
solve(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Error 1",
    "Change 2 Mike123",
    "Report",
]);