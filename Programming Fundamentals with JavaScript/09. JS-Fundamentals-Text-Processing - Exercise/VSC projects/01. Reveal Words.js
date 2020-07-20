function solve(word, text) {

    let wordArr = word.split(", ");
    text.split(" ").forEach((element) => {
        if (element === "*".repeat(element.length)) {
            text = text.replace(element, wordArr.find((word) => word.length === element.length));
        }
    })


    console.log(text);
}

solve('great',
    'softuni is ***** place for learning new programming languages'
);