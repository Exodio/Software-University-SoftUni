function solve(input) {

    let resourcesList = {};

    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());

        resourcesList[resource] = quantity + (resourcesList[resource] || 0);
    }

    
    let entries = Object.entries(resourcesList);
    for (const kvp of entries) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
    // entries.forEach(([resource, quantity]) => {
    //     console.log(`${resource} -> ${quantity}`);
    // });
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);