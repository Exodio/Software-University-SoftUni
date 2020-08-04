function emojiDetector(input) {

    let textInput = input.shift();

    let regexDigitsPattern = /[0-9]/;
    let coolNumbersThreshold = 1;

    textInput.split("").forEach(element => {
        if (element.match(regexDigitsPattern)) {
            coolNumbersThreshold *= Number(element.match(regexDigitsPattern));
        }
    });


    let regexEmojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let validList = textInput.matchAll(regexEmojiPattern);
    let emojiCounter = 0;
    let result = [];

    for (const emojis of validList) {
        emojiCounter++;
        let coolOnes = (emojis.groups.emoji)
            .split("")
            .map(element => element.charCodeAt(0))
            .reduce((a, b) => a + b);

        if (coolOnes > coolNumbersThreshold) {
            result.push(emojis[0]);
        }
    }

    console.log(`Cool threshold: ${coolNumbersThreshold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    result.forEach(emoji => console.log(emoji));
}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);