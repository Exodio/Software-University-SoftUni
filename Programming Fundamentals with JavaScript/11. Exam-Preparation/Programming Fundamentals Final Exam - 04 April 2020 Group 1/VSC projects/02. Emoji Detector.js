function emojiDetector(input) {

    let textInput = input[0];

    let coolTresholdPattern = calculateThreshold(textInput.match(/[0-9]/g)); // in order to get each individual number

    let allEmojiMatches = Array.from(textInput.matchAll(/(?<surrounding>::|\*\*)(?<emoji>[A-Z][a-z]{2,})(\k<surrounding>)/g)); //\k === \1 // In order to get an arr of all of the words
    let emojiCounter = 0;
    let coolEmojiesArr = [];

    for (let eachMatch of allEmojiMatches) {
        let emoji = eachMatch.groups.emoji;
        let coolness = calculateCoolness(emoji);

        if (coolness >= coolTresholdPattern) {
            coolEmojiesArr.push(eachMatch[0]);
        } else {
            emojiCounter++; //If the emoji does not meet the requirements(so it is not a cool emoji) we increase the counter
        }

    }

    console.log(`Cool threshold: ${coolTresholdPattern}`);

    let totalEmojiesFound = (coolEmojiesArr.length + emojiCounter);
    if (totalEmojiesFound > 0) {
        console.log(`${totalEmojiesFound} emojis found in the text. The cool ones are:`);
    }

    console.log(coolEmojiesArr.join("\n"));

    function calculateThreshold(emojiArr) {
        let thresholdResult = 1; // As we cannot number * 0 because we will receive 0, so it has to be 1

        for (let eachDigit of emojiArr) { // In order to get an arr of each individual char in the input
            thresholdResult *= Number(eachDigit);
        }

        return thresholdResult;
    }
    function calculateCoolness(emoji) {
        let asciiResult = 0; //Emoji coolness result as ASCII number values

        for (let eachLetter of emoji.split("")) {
            asciiResult += eachLetter.charCodeAt();
        }

        return asciiResult;
    }
}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);