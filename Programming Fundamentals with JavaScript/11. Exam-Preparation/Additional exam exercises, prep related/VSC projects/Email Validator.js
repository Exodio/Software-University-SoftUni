function emailValidator(input) {

    let emailInput = input.shift();

    for (const commandLine of input) {

        let command = commandLine.split(" ");

        if (commandLine === "Complete") {
            break;
        }

        if (commandLine === "Make Upper") {
            let upperCaseResult = emailInput = emailInput.toUpperCase();

            console.log(upperCaseResult);
        } else if (commandLine === "Make Lower") {
            let lowerCaseResult = emailInput = emailInput.toLowerCase();

            console.log(lowerCaseResult);
        } else if (command[0] === "GetDomain") {
            let startIndex = emailInput.lastIndexOf(".");
            let lastChars = emailInput.substring(startIndex + 1);

            console.log(lastChars);
        } else if (command[0] === "GetUsername") {
            if (emailInput.includes("@")) {
                let symbolIndex = emailInput.indexOf("@");
                let userName = emailInput.substring(0, symbolIndex);

                console.log(userName);
            } else {
                console.log(`The email ${emailInput} doesn't contain the @ symbol.`);
            }

        } else if (command[0] === "Replace") {
            let rgxChar = new RegExp(command[1], "g");
            let charReplaceResult = emailInput = emailInput.replace(rgxChar, "-");

            console.log(charReplaceResult);
        } else if (command[0] === "Encrypt") {
            let allValues = [];

            for (const eachSymbol of emailInput) {
                let asciiValue = eachSymbol.charCodeAt();
                allValues.push(asciiValue);
            }

            console.log(allValues.join(" "));
        }
    }
}

emailValidator([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
]);

// emailValidator(["Mike123@somemail.com",
//     "Make Upper",
//     "GetDomain 3",
//     "GetUsername",
//     "Encrypt",
//     "Complete",
// ]);