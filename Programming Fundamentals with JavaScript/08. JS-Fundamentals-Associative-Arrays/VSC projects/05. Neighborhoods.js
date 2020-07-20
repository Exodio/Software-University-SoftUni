function solve(input) {

    let neighborhood = new Map();
    let streetNames = input.shift().split(", ");

    streetNames.forEach(elementName => { //Filling the map with the first elements of the array and setting their values as empty arrays
        neighborhood.set(elementName, []);
    });

    for (const line of input) {
        let tokens = line.split(" - ");

        if (neighborhood.has(tokens[0])) {
            let name = neighborhood.get(tokens[0]);

            name.push(tokens[1]);
            neighborhood.set(tokens[0], name);
        } else { //Goes here only if the neighbourhood input is an invalid name
            continue;
        }
    }

    let entries = Array.from(neighborhood.entries());
    let sortedEntries = entries.sort((a, b) => b[1].length - a[1].length); //The count of the people is the length of the second line in both a and b. To sort in descending we subtract the length of a inhabitance from the length of the b inhabitants.

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