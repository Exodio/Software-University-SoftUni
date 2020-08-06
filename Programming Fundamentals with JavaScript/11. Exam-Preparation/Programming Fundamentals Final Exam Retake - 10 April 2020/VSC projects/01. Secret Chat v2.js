function secretChat(input) {

    let concealedInput = input.shift();

    let commandLine = input.shift();

    while (commandLine !== "Reveal") {
        let [command, firstArg, secondArg] = commandLine.split(":|:");

        switch (command) {
            case "InsertSpace":
                let index = Number(firstArg);
                concealedInput = concealedInput.substr(0, index) + " " + concealedInput.substr(index);
                console.log(concealedInput);
                break;

            case "Reverse":
                if (concealedInput.includes(firstArg)) {
                    let reversedSubstring = firstArg.split("").reverse().join("");
                    concealedInput = concealedInput.replace(firstArg, "");
                    concealedInput += reversedSubstring;
                    console.log(concealedInput);
                } else {
                    console.log("error");
                }
                break;

            case "ChangeAll":
                for (i = 0; i < concealedInput.length; i++) {
                    if (concealedInput.includes(firstArg)) {
                        concealedInput = concealedInput.replace(firstArg, secondArg);
                    }
                }
                console.log(concealedInput);
                break;
        }

        commandLine = input.shift();
    }

    console.log(`You have a new text message: ${concealedInput}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);