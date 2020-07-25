function solve(input) {

    let racersListObj = {};
    let participantsList = input[0].split(", ");

    for (const eachLine of input.slice(1)) {

        let nameRegExp = eachLine.match(/[A-Za-z]/g); //We take only the alphanumeric characters which we need- Each letter is the name
        let personName = nameRegExp.join(""); //We receive the joined name of each racer

        if (nameRegExp && participantsList.includes(personName)) {
            let digitRegExp = eachLine.match(/[0-9]/g); //We take only the alphanumeric characters which we need- Each digit is the distance that the (name) ran (DistanceMatch?)
            let currentDistance = distanceCalculation(digitRegExp);

            if (!racersListObj[personName]) { //If we receive the person only once and not before, we place a starting distance to 0 and after that in the below the new amount will be added
                racersListObj[personName] = 0;
            }

            racersListObj[personName] += currentDistance; //If we receive the person more than once we add their distance to his old distance(currentDistance)
        }
    }

    let threeTopKeyRacers = Object.keys(racersListObj)
        .sort((racerOne, racerTwo) => racersListObj[racerTwo] - racersListObj[racerOne]) //We sort them by distance in decending format (from the biggest to the smallest)
        .slice(0, 3) //As we may recive more than one end person we put this to only have the list of the top 3 placements with the highest scores(from racersListObj)
    for (const indexPosition in threeTopKeyRacers) {

        switch (indexPosition) {
            case 0:
                console.log(`1st place: ${threeTopKeyRacers[indexPosition]}`);
                break;
            case 1:
                console.log(`2nd place: ${threeTopKeyRacers[indexPosition]}`);
                break;
            case 2:
                console.log(`3rd place: ${threeTopKeyRacers[indexPosition]}`);
                break;
        }
    }

    function distanceCalculation(arr) {
        let totalDistance = 0;

        if (arr === null) {
            return totalDistance;
        }

        arr.forEach((digit) => totalDistance += Number(digit));
        return totalDistance;
    }
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