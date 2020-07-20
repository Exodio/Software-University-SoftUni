function solve(stringArr) {
    let dictionary = {};

    for (let element of stringArr) {
        let eachObject = JSON.parse(element);
        dictionary = Object.assign(dictionary, eachObject);
    }

    let keysSorted = Object.keys(dictionary);
    keysSorted.sort((a, b) => a.localeCompare(b));

    for (let eachTerm of keysSorted) {
        let definition = dictionary[eachTerm];
        console.log(`Term: ${eachTerm} => Definition: ${definition}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);