function solve(input) {

    let passwordInput = input.shift();
    let lineCommandInput = input.shift();
    let rawPassword = "";

    while (lineCommandInput !== "Done") {
        let [command, firstIndexArg, secondIndexArg] = lineCommandInput.split(" ");

        switch (command) {

            case "TakeOdd":
                rawPassword = "";

                for (let i = 1; i < passwordInput.length; i++) {

                    if (i % 2 !== 0) {
                        rawPassword += passwordInput[i];
                    }
                }
                passwordInput = rawPassword;

                console.log(rawPassword);
                break;

            case "Cut":
                let givenIndexStart = Number(firstIndexArg);
                let givenLengthEnd = Number(secondIndexArg);

                let substringPassword = passwordInput.substring(givenIndexStart, givenIndexStart + givenLengthEnd);
                passwordInput = passwordInput.replace(substringPassword, "");

                console.log(passwordInput);
                break;

            case "Substitute":
                rawPassword = passwordInput;

                while (rawPassword.includes(firstIndexArg)) {
                    rawPassword = rawPassword.replace(firstIndexArg, secondIndexArg);
                }

                if (passwordInput.includes(firstIndexArg)) {
                    console.log(rawPassword);
                } else {
                    console.log("Nothing to replace!");
                }
                passwordInput = rawPassword;

                break;
        }

        lineCommandInput = input.shift();
    }


    console.log(`Your password is: ${passwordInput}`);
}

solve(
    ["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
        "TakeOdd",
        "Cut 15 3",
        "Substitute :: -",
        "Substitute | ^",
        "Done",
    ]);