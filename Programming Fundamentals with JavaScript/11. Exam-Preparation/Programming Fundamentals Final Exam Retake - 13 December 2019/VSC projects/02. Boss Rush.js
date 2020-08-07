function bossRush(input) {
    let numberInputs = input.shift(); //Number of inputs, can be place with Number() infront

    while (numberInputs > 0) { //We loop as many times as the input is listed
        let eachLine = input.shift(); //We take each input line and check if it is valid
        let regexPattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g; //Boss- only upper case letters and minimum of 4 letters long, the title contains exactly, two words and they have only alphabetical letters and one \w(whitespace) between them
        let match = regexPattern.exec(eachLine); //We validate each result

        if (match) { //If it is valid and we have a match
            let boss = match.groups.boss; //We take the boss title value
            let title = match.groups.title; //We take the title value
            let strength = boss.length; //As per requirements the strength is the length of the name
            let armour = title.length; //As per requirements the armor is the length of the title of the two words

            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armour: ${armour}`);
        } else { //If the validation did not pass
            console.log("Access denied!");
        }

        numberInputs--; //We decrease each loop in order to have exactly as many iterrations as the initial number of inputs
    }
}

bossRush([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]);