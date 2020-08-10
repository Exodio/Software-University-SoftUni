function worldTour(input) {

    let textInput = input.shift();

    for (let eachLine of input) {
        if (eachLine === "Travel") {
            break;
        }

        let command = eachLine.split(":");

        switch (command[0]) {
            case "Add Stop":
                let index = Number(command[1]);
                let letter = command[2];

                if (textInput[index]) {
                    textInput = textInput.substring(0, index) + letter + textInput.substring(index);
                }
                break;

            case "Remove Stop":
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);

                if (textInput[startIndex] && textInput[endIndex]) {
                    textInput = textInput.substring(0, startIndex) + textInput.substring(endIndex + 1);
                }
                break;

            case "Switch":
                let oldString = command[1];
                let newString = command[2];

                textInput = textInput.replace(new RegExp(oldString, "g"), newString);
                break;
        }

        console.log(textInput);
    }

    console.log(`Ready for world tour! Planned stops: ${textInput}`);
}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);