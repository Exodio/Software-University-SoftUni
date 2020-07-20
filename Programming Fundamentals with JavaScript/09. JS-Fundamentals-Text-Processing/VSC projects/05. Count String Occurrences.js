function solve(textInput, wantedWord) {

    let count = 0;
    let textArr = textInput.split(" ");

    for (const currentElement of textArr) {
        if (wantedWord === currentElement) {
            count++;
        }
    }

    console.log(count);
}


solve("This is a word and it also is a sentence",
    "is"
);