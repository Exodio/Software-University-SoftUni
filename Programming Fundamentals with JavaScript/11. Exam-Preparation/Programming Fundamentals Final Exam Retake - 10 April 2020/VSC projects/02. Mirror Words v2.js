function mirrorWords(input) {

    let regexPattern = /(@|#)(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let validator = [...input.shift().matchAll(regexPattern)];
    let mirrorsArr = [];

    for (const eachMatch of validator) {
        let fistWord = eachMatch[2];
        let secondWord = eachMatch[3];
        let reversedSecondWord = secondWord.split("").reverse().join("");

        if (fistWord === reversedSecondWord) {
            mirrorsArr.push(fistWord + " <=> " + secondWord);
        }
    }

    if (validator.length <= 0) {
        console.log("No word pairs found!")
        console.log("No mirror words!")
    } else {
        console.log(`${validator.length} word pairs found!`);
    }
    
    if (mirrorsArr.length <= 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorsArr.join(", "));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);