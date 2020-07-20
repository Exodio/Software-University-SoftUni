function solve(input) {
    let words = new Map();

    for (const eachElement of input) {
        let counter = 1;

        if (words.has(eachElement)) {
            let oldWord = words.get(eachElement);
            counter += Number(oldWord);

            words.set(eachElement, counter);
        } else {
            words.set(eachElement, counter);
        }

    }

    let entries = Array.from(words.entries());
    let sortedEntries = entries.sort((a, b) => b[1] - a[1]);

    for (const kvp of sortedEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);