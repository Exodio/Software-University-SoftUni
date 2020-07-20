function solve(input) {

    let wordsObj = {};

    for (const eachElement of input) {
        let counter = 1;

        if (wordsObj.hasOwnProperty(eachElement)) {
            let oldWord = wordsObj[eachElement];
            counter += Number(oldWord);

            wordsObj[eachElement] = counter;
        } else {
            wordsObj[eachElement] = counter;
        }
    }

    let entries = Object.entries(wordsObj);
    let sortedEntries = entries.sort((a, b) => {
        let wordCountA = a[1];
        let wordCountB = b[1];

        return wordCountB - wordCountA;
    });

    for (const kvp of sortedEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);