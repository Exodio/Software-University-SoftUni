function secretChat(input) {

    let concealedMessage = input.shift();

    for (const eachLine of input) {

        if (eachLine === "Reveal") {
            break;
        }

        let command = eachLine.split(":|:");

        switch (command[0]) {

            case "InsertSpace":
                let indexInsertion = Number(command[1]);
                concealedMessage = concealedMessage.substr(0, indexInsertion) + " " + concealedMessage.substring(indexInsertion);
                console.log(concealedMessage);
                break;

            case "Reverse":
                if (concealedMessage.includes(command[1])) {
                    concealedMessage = concealedMessage.replace(command[1], ""); //we remove and replace the received line with ("") nothing in the main input
                    let reversedSubstring = command[1].split("").reverse().join(""); //we reverse the received line 
                    concealedMessage += reversedSubstring; //We add the reversed line to the end the main input
                    console.log(concealedMessage);
                } else {
                    console.log("error");
                }
                break;

            case "ChangeAll":
                for (const eachOccurence of concealedMessage) {
                    if (concealedMessage.includes(command[1])) {
                        concealedMessage = concealedMessage.replace(command[1], command[2]);
                    }
                }
                console.log(concealedMessage);
                break;
        }
    }
    console.log(`You have a new text message: ${concealedMessage}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);