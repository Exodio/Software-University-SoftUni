function solve(word, text) {

    let wordsInput = word.split(", ");

    wordsInput.forEach((key) => {
        let element = "*".repeat(key.length);
        text = text.replace(element, key);

    });


    console.log(text);
}

solve('great',
    'softuni is ***** place for learning new programming languages'
);