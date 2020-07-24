function solve(input) {

    let racersListObj = {};

    let participantsList = input.shift().split(", ");

    for (const eachLine of input) {
        let nameRegExp = /[A-Za-z]/g; //We take only the alphanumeric characters which we need- Each letter is the name
        let digitRegExp = /[0-9]/g; //We take only the alphanumeric characters which we need- Each digit is the distance that the (name) ran

        let matchName = eachLine.match(nameRegExp);
        let matchDistance = eachLine.match(digitRegExp);

        if (matchName && matchDistance) {
            let personName = matchName.join("");

            if (participantsList.includes(personName)) { //We store the information about the person only, if he is in the initial list first taken(participantsList)
                let currentDistance = matchDistance.map(Number)
                    .reduce((accumulator, currentValue) => accumulator + currentValue); //We use reduce to calculate the digits which we recived above(matchDistance) in order to get the total distance which each person ran

                if (!racersListObj[personName]) { //If we receive the person only once and not before, we place a starting distance to 0 and after that in the below the new amount will be added
                    racersListObj[personName] = 0;
                }

                racersListObj[personName] += currentDistance; //If we receive the person more than once we add their distance to his old distance(currentDistance)
            }
        }
    }

    let keyObjectsResult = Object.keys(racersListObj)
        .sort((a, b) => racersListObj[b] - racersListObj[a]) //We sort them by distance in decending format (from the biggest to the smallest)
        .slice(0, 3) //As we may recive more than one end person we put this to only have the list of the top 3 placements with the highest scores(from racersListObj)
        .forEach((racer, indexPosition) => {

            switch (indexPosition) {
                case 0:
                    console.log(`1st place: ${racer}`);
                    break;
                case 1:
                    console.log(`2nd place: ${racer}`);
                    break;
                case 2:
                    console.log(`3rd place: ${racer}`);
                    break;
            }
        });
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);