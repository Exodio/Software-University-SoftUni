function activationKeys(input) {

    let inputKey = input[0];
    let inputCommands = input.slice(1, input.lastIndexOf(input));

    for (const eachLine of inputCommands) {
        let [command, firstArgument, secondArgument, thirdArgument] = eachLine.split(">>>");

        if (command === "Generate") {
            break;
        }

        switch (command) {
            case "Contains":
                if (inputKey.includes(firstArgument)) {
                    console.log(`${inputKey} contains ${firstArgument}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case "Flip":
                secondArgument = Number(secondArgument);
                thirdArgument = Number(thirdArgument);

                let substringResult = inputKey.substring(secondArgument, thirdArgument); //Exclusive end index means that it will not be substring(start, end + 1)
                let flippedResult = "";

                if (firstArgument === "Upper") {
                    flippedResult = substringResult.toUpperCase();
                    inputKey = inputKey.replace(substringResult, flippedResult);

                } else if (firstArgument === "Lower") {
                    flippedResult = substringResult.toLowerCase();
                    inputKey = inputKey.replace(substringResult, flippedResult);

                }
                console.log(inputKey);
                break;

            case "Slice":
                firstArgument = Number(firstArgument);
                secondArgument = Number(secondArgument);
                inputKey = inputKey.substring(0, firstArgument) + inputKey.substring(secondArgument); //!Exclusive! end index (secondArgument(will not be +1!))
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