function nikuldensCharity(input) {

    let textInput = input.shift();
    let lineCommand = input.shift();

    while (lineCommand !== "Finish") {
        let [command, firstArgument, secondArgument] = lineCommand.split(" ");

        switch (command) {
            case "Replace":
                let regExp = new RegExp(firstArgument, "g");
                let replacedOccurences = textInput = textInput.replace(regExp, secondArgument);
                console.log(replacedOccurences);
                break;

            case "Cut":
                let startIndex = Number(firstArgument);
                let endIndex = Number(secondArgument);
                
                if (startIndex >= 0 && endIndex <= textInput.length) {
                    let removedSubstring = textInput = textInput.substring(0, startIndex) + textInput.substring(endIndex + 1);
                    console.log(removedSubstring);
                } else {
                    console.log("Invalid indexes!");
                }
                break;

            case "Make":
                if (firstArgument === "Upper") {
                    let charsToUpperCase = textInput = textInput.toUpperCase();
                    console.log(charsToUpperCase);
                } else if (firstArgument === "Lower") {
                    let charsToLowerCase = textInput = textInput.toLowerCase();
                    console.log(charsToLowerCase);
                }
                break;

            case "Check":
                if (textInput.includes(firstArgument)) {
                    console.log(`Message contains ${firstArgument}`);
                } else {
                    console.log(`Message doesn't contain ${firstArgument}`);
                }
                break;

            case "Sum":
                let startingIndex = Number(firstArgument);
                let endingIndex = Number(secondArgument);

                if (startingIndex >= 0 && endingIndex <= textInput.length) {
                    let substringValues = textInput.substring(startingIndex, endingIndex + 1);
                    let asciiSum = 0;

                    for (let eachValue of substringValues) {
                        eachValue = eachValue.charCodeAt();
                        asciiSum += eachValue;
                    }
                    console.log(asciiSum);

                } else {
                    console.log("Invalid indexes!");
                }
                break;
        }

        lineCommand = input.shift();
    }
}

nikuldensCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]);
// nikuldensCharity([
//     'HappyNameDay',
//     'Replace p r',
//     'Make Lower',
//     'Cut 2 23',
//     'Sum -2 2',
//     'Finish'
// ]);