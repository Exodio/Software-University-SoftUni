function solve(input) {

    let wordTracker = {};
    let givenWords = input.shift().split(" ");

    let givenWordsPosition = givenWords.forEach((word) => {
        wordTracker[word] = 0;
    });

    for (const element of input) {

        if (wordTracker.hasOwnProperty(element)) { //if (Object.keys(wordTracker).includes(element));
            wordTracker[element] += 1;
        } else {
            continue;
        }
    }

    
    let result = Object.keys(wordTracker).sort((a, b) => wordTracker[b] - wordTracker[a]).forEach((kvp) => {
        console.log(`${kvp} - ${wordTracker[kvp]}`);
    });
}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);