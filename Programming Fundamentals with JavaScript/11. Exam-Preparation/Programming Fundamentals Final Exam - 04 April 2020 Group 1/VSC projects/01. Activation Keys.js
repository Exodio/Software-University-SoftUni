function activationKeys(input) {

    let inputKey = input.shift();

    for (const eachLine of input) {
        let command = eachLine.split(">>>");

        if (command[0] === "Generate") {
            break;
        }

        switch (command[0]) {
            case "Contains":
                if (inputKey.includes(command[1])) {
                    console.log(`${inputKey} contains ${command[1]}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case "Flip":
                let substringResult = inputKey.substring(Number(command[2]), Number(command[3])); //Exclusive end index (command[3])
                let flippedResult = "";

                if (command[1] === "Upper") {
                    flippedResult = substringResult.toUpperCase();
                } else if (command[1] === "Lower") {
                    flippedResult = substringResult.toLowerCase();
                }
                inputKey = inputKey.replace(substringResult, flippedResult);
                console.log(inputKey);
                break;

            case "Slice":
                inputKey = inputKey.substring(0, Number(command[1])) + inputKey.substring(Number(command[2])); //Exclusive end index (command[2])
                console.log(inputKey);
                break;
        }
    }

    console.log(`Your activation key is: ${inputKey}`)
}

activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);