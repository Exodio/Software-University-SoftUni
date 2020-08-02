function messageTranslator(input) {

    let numberOfLines = input.shift();

    for (let eachLine of input) {
        let regexPattern = /^(!)(?<command>[A-Z]{1}[a-z]+)\1:\[(?<message>[A-Za-z]+)\]$/g;
        let match = regexPattern.exec(eachLine);

        if (match) {

            if (match[3].length >= 8) {
                let result = [];
                
                for (let eachElement of match[3]) {
                    eachElement = eachElement.charCodeAt();
                    result.push(eachElement);
                }
                console.log(`${match[2]}: ${result.join(" ")}`);       

            } else {
                console.log("The message is invalid");
            }

        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);