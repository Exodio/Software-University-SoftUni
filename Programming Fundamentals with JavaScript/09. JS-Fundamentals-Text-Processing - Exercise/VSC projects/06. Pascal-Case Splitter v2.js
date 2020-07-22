function solve(input) {

    let charsArr = input.split("");
    let charsIndex = [];
    let wordsResult = [];

    for (const index in charsArr) {

        let eachChar = charsArr[index];
        let asciiCharValue = eachChar.charCodeAt(0);

        if (asciiCharValue >= 65 && asciiCharValue <= 90) { //We check if the current char is upper case based
            charsIndex.push(Number(index));
        }
    }

    for (let i = 0; i < charsIndex.length; i++) {
        wordsResult.push(input.substring(charsIndex[i], charsIndex[i + 1])); //From the first index(index of each word) and last index(index of each word), we only derrive the value(words) in between the two indexes
    }


    console.log(wordsResult.join(", "));
}

solve('HoldTheDoor');