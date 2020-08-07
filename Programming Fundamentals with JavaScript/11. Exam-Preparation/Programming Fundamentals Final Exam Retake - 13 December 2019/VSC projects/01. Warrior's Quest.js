function warrirosQuest(input) {

    let textInput = input.shift();
    let commandLine = input.shift();

    while (commandLine !== "For Azeroth") {
        let [command, firstArg, secondArg, thirdArg] = commandLine.split(" ");

        if (command === "GladiatorStance") {
            textInput = textInput.toUpperCase();
            console.log(textInput);

        } else if (command === "DefensiveStance") {
            textInput = textInput.toLowerCase();
            console.log(textInput);

        } else if (command === "Dispel") {
            let index = Number(firstArg); //The required index //Works without Number() as well in the testing platform
            let letter = secondArg; //The new letter which needs to be inserted at the required index

            if (index < textInput.length && index >= 0) { //We check if the index is within the boundry of the text
                textInput = textInput.split(""); //We split each character individually
                textInput.splice(index, 1, letter); //We add at the given index only the requested letter (one time!)
                textInput = textInput.join(""); //We join the string togather
                console.log("Success!"); // We print as requested
            } else {
                console.log("Dispel too weak.");
            }

        } else if (command === "Target" && firstArg === "Change") {
            let firstSubstring = secondArg;
            let secondSubstring = thirdArg;

            while (textInput.includes(firstSubstring)) { //As long as the argument is true the while will proceed
                textInput = textInput.replace(firstSubstring, secondSubstring);
            }
            console.log(textInput);

        } else if (command === "Target" && firstArg === "Remove") {
            let substring = secondArg;

            while (textInput.includes(substring)) { //As long as the argument is true the while will proceed
                textInput = textInput.replace(substring, ""); //We remove the substring from the text with ""(which is equal to empty(nothing))
            }
            console.log(textInput);

        } else {
            console.log('Command doesn\'t exist!'); //Error in the testing platform (judge) found
        }

        commandLine = input.shift();
    }
}

// warrirosQuest([
//     'fr1c710n',
//     'GladiatorStance',
//     'Dispel 2 I',
//     'Dispel 4 T',
//     'Dispel 6 O',
//     'Dispel 5 I',
//     'Dispel 10 I',
//     'Target Change RICTION riction',
//     'For Azeroth'
// ]);

warrirosQuest([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
]);