function stringManipulation(input) {

    let stringInput = input.shift();

    for (const eachLine of input) {
        let command = eachLine.split(" ");

        if (command === "Done") {
            break;
        }

        switch (command[0]) {

            case "Change":
                let regexPattern = new RegExp(command[1], "g");
                let replacementChar = command[2]
                stringInput = stringInput.replace(regexPattern, replacementChar);
                console.log(stringInput);
                break;

            case "Includes":

                if (stringInput.includes(command[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":

                if (stringInput.endsWith(command[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;

            case "Uppercase":
                let upperCaseInput = stringInput = stringInput.toUpperCase();
                console.log(upperCaseInput);
                break;

            case "FindIndex":
                let findFirstCharIndex = stringInput.indexOf(command[1]);
                console.log(findFirstCharIndex);
                break;

            case "Cut":
                let startIndex = command[1];
                let length = command[2];
                let charsRemoval = stringInput.substr(startIndex, length);
                console.log(charsRemoval);
                break;
        }
    }
}

stringManipulation([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);