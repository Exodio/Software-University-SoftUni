function messageTranslator(input) {

    let numberOfLines = input.shift();

    for (let eachLine of input) {
        let regexPattern = /^(!)(?<cmd>[A-Z]{1}[a-z]+)\1:\[(?<message>[A-Za-z]+)\]$/g;
        let match = regexPattern.exec(eachLine);

        if (match) {
            let result = [];
            let name = match[2];
            let message = match[3];

            if (name.length >= 3 && message.length >= 8) {    

                for (let eachElement of message) {
                    eachElement = eachElement.charCodeAt();
                    result.push(eachElement);
                }
                console.log(`${name}: ${result.join(" ")}`);       

            } else {
                console.log("The message is invalid");
            }

        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);