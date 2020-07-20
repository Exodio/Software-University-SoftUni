function solve(word, sentence) {

    let givenWord = word.toLowerCase();
    let text = sentence.toLowerCase();

    if (text.split(" ").includes(givenWord)) {
        console.log(`${givenWord}`);

    } else {
        console.log(`${givenWord} not found!`);
    }
}

solve('python',
    'JavaScript is the best programming language'
);