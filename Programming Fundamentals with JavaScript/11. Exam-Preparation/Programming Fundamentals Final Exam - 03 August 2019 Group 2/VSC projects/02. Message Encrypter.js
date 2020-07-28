function messageEncrypted(input) {

    let linesIndicator = input.shift();

    for (const eachLine of input) {
        let regexPattern = /(\*|@)(?<nameTag>[A-Z][a-z]{3,})\1: \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/g;
        let validExecution = regexPattern.exec(eachLine);

        if (validExecution) { //If the message is valid
            let nameTag = validExecution[2];
            let numbersArr = [];

            for (const eachLetter of validExecution.slice(3)) {
                let asciiNumbers = eachLetter.charCodeAt();
                numbersArr.push(asciiNumbers);
            }
            console.log(`${nameTag}: ${numbersArr.join(" ")}`);

        } else //If the message is not valid
        {
            console.log("Valid message not found!");
        }
    }
}

messageEncrypted([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);