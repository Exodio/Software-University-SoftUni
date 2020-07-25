function starEnigma(input) {

    let planetsObj = {
        attackedPlanets: [],
        destroyedPlanets: [],
    };

    for (const eachLine of input.slice(1)) { //We take the part after(3) the message count
        let regexPatternLettersCount = /[star]/gi; //We count all the letteers [s,t,a,r] -g(global)-i(case-insensitive)(will match the string "a" or "A")

        let decreptionCount = eachLine.match(regexPatternLettersCount) ? eachLine.match(regexPatternLettersCount).length : 0; //We check if they are included in the input of each line and if they are within the array's scope
        let messageDecription = eachLine.split("").map((eachSymbol) => String.fromCharCode(eachSymbol.charCodeAt() - decreptionCount)).join(""); //We remove the count from the current ASCII value of each symbol

        let regexPatternMessage = /@(?<planet>[A-Za-z]+)(?:[^@\-!:>]+)?:(?<planetPopulation>[\d]+)(?:[^@\-!:>]+)?!(?<attackType>A|D)!(?:[^@\-!:>]+)?->(?<soldierCount>[\d]+)/g;
        let patternMatch = regexPatternMessage.exec(messageDecription);

        if (patternMatch) {
            let {
                planet,
                planetPopulation,
                attackType,
                soldierCount
            } = patternMatch.groups;

            if (attackType === "A") {
                planetsObj.attackedPlanets.push(planet);
            } else if (attackType === "D") {
                planetsObj.destroyedPlanets.push(planet);
            }
        }
    }

    let attackedPlanetsLength = planetsObj.attackedPlanets.length; //We check how long the arr is and we consider it as count
    let destroyedPlanetsLength = planetsObj.destroyedPlanets.length;

    console.log(`Attacked planets: ${attackedPlanetsLength}`);

    if (attackedPlanetsLength > 0) {
        planetsObj.attackedPlanets.sort((a, b) => a.localeCompare(b)).forEach((planet) => console.log(`-> ${planet}`));
    }

    console.log(`Destroyed planets: ${destroyedPlanetsLength}`);

    if (destroyedPlanetsLength > 0) {
        planetsObj.destroyedPlanets.sort((a, b) => a.localeCompare(b)).forEach((planet) => console.log(`-> ${planet}`));
    }

}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);