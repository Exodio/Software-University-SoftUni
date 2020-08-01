function nikuldensCharity(input) {

    let textInput = input.shift();

    for (const eachLine of input) {

        if (eachLine === "Finish") {
            break;
        }

        let command = eachLine.split(" ");

        switch (command[0]) {
            case "Replace":
                let regExp = new RegExp(command[1], "g");
                let replacedOccurences = textInput = textInput.replace(regExp, command[2]);
                console.log(replacedOccurences);
                break;

            case "Cut":
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);

                if (startIndex >= 0 && endIndex <= textInput.length) {
                    let removedSubstring = textInput = textInput.substring(0, startIndex) + textInput.substring(endIndex + 1);
                    console.log(removedSubstring);
                } else {
                    console.log("Invalid indexes!");
                }
                break;

            case "Make":
                if (command[1] === "Upper") {
                    let charsToUpperCase = textInput = textInput.toUpperCase();
                    console.log(charsToUpperCase);
                } else if (command[1] === "Lower") {
                    let charsToLowerCase = textInput = textInput.toLowerCase();
                    console.log(charsToLowerCase);
                }
                break;

            case "Check":
                if (textInput.includes(command[1])) {
                    console.log(`Message contains ${command[1]}`);
                } else {
                    console.log(`Message doesn't contain ${command[1]}`);
                }
                break;

            case "Sum":
                let startingIndex = Number(command[1]);
                let endingIndex = Number(command[2]);

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