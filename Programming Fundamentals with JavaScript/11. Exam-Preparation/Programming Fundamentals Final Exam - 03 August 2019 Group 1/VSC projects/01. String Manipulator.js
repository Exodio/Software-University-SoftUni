function stringManipulator(input) {
    let stringInput = input.slice(0, 1).join(" ");

    for (const eachLine of input.slice(1)) {
        let [command, string, count] = eachLine.split(" ");

        if (command === "Done") {
            break;
        }

        switch (command) {
            case "Translate":
                let regexPattern = new RegExp(string, "g");
                let replacement = count;
                stringInput = stringInput.replace(regexPattern, replacement);
                console.log(stringInput);
                break;

            case "Includes":
                if (stringInput.includes(string)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;

            case "Start":
                if (stringInput.startsWith(string)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;

            case "Lowercase":
                let lowerCaseInput = (stringInput = stringInput.toLowerCase());
                console.log(lowerCaseInput);
                break;

            case "FindIndex":
                let findLastCharIndex = stringInput.lastIndexOf(string);
                console.log(findLastCharIndex);
                break;

            case "Remove":
                let newStringInput = stringInput.substr(Number(count));
                console.log(newStringInput);
                break;
        }
    }
}

stringManipulator([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End",
]);