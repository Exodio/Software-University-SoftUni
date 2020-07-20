function solve(input) {

    let neighborhoodObj = {};
    let streetNames = input.shift().split(", ");

    for (const elementName of streetNames) { //streetNames.forEach(name => neighborhoodObj[name] = []);
        neighborhoodObj[elementName] = [];
    }

    for (const line of input) {
        let [neighborhood, person] = line.split(" - ");

        if (neighborhoodObj.hasOwnProperty(neighborhood)) {
            let name = neighborhoodObj[neighborhood];

            name.push(person);
            neighborhoodObj[neighborhood] = name; //neighborhoodObj[neighborhood] = push(person);
        }
    }

    let entries = Object.entries(neighborhoodObj);
    let sortedEntries = entries.sort((a, b) => b[1].length - a[1].length);

    for (const kvp of sortedEntries) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);

        for (const keyMember of kvp[1]) {
            console.log(`--${keyMember}`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);