function passwordReset(input) {

    let passwordInput = input.shift();
    let commandLine = input.shift();

    while (commandLine !== "Done") {
        let [command, argOne, argTwo] = commandLine.split(" ");

        if (command === "TakeOdd") {
            let newRawPassword = "";

            for (let i = 1; i < passwordInput.length; i += 2) {
                newRawPassword += passwordInput[i];
            }
            console.log(newRawPassword);
            passwordInput = newRawPassword;

        } else if (command.includes("Cut")) {
            let index = Number(argOne);
            let length = Number(argTwo);

            let removedString = passwordInput.substr(index, length);
            passwordInput = passwordInput.replace(removedString, "");
            console.log(passwordInput);

        } else if (command.includes("Substitute")) {
            let substring = argOne;
            let substitute = argTwo;

            if (passwordInput.includes(substring)) {
                while (passwordInput.includes(substring)) {
                    passwordInput = passwordInput.replace(substring, substitute);
                }            
                console.log(passwordInput);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        commandLine = input.shift();
    }

    console.log(`Your password is: ${passwordInput}`);

}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);