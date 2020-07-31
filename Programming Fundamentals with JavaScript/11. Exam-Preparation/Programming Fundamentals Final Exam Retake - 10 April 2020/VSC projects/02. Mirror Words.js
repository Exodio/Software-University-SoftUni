function mirrorWords(input) {

    let textInput = input.shift();
    let regexPattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let validator = regexPattern.exec(textInput);

    let wordPairsCount = 0;
    let mirrorWordsArr = [];

    while (validator) { //If the pattern matches (valid)              
        wordPairsCount++;
        
        let firstWord = validator.groups.firstWord; //validator[1];
        let secondWord = validator.groups.secondWord; //validator[2];
        //let {firstWord, secondWord} = validator.groups;
        let reversedFirstWord = firstWord.split("").reverse().join("");

        if (reversedFirstWord === secondWord) { //we have a mirror word match
            mirrorWordsArr.push(`${firstWord} <=> ${secondWord}`);
        }

        validator = regexPattern.exec(textInput);
    }

    if (wordPairsCount <= 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${wordPairsCount} word pairs found!`);
    }

    if (mirrorWordsArr.length <= 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWordsArr.join(", "));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);