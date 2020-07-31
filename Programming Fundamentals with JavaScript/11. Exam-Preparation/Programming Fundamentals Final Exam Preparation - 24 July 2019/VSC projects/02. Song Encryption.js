function songEncryption(input) {

    let currentTrack;
    let regexPattern = /^(?<name>[A-Z][a-z\' ]+):(?<song>[A-Z ]+)$/;

    while (currentTrack !== "end") {
        currentTrack = input.shift();

        if (currentTrack === "end") {
            break;
        }

        let validator = regexPattern.exec(currentTrack);

        if (validator) {
            let key = validator.groups.name.length;
            let currentTrackList = validator[0];
            let output = [];

            for (let eachSymbol of currentTrackList) {
                let newSymbolResult;

                if (eachSymbol === " " || eachSymbol === "'") {
                    newSymbolResult = eachSymbol;
                    output.push(newSymbolResult);
                    continue;

                } else if (eachSymbol === ":") {
                    newSymbolResult = "@";
                    output.push(newSymbolResult);
                    continue;

                } else {
                    let currentAsciiValue = eachSymbol.charCodeAt(0);
                    let newAsciiValue = Number(currentAsciiValue) + key;

                    if (currentAsciiValue >= 65 && currentAsciiValue <= 90) {

                        if (newAsciiValue > 90) {
                            let firstDifference = newAsciiValue - 90;
                            let fromStartUpper = 65 + firstDifference - 1;
                            newSymbolResult = String.fromCharCode(fromStartUpper);
                        } else {
                            newSymbolResult = String.fromCharCode(newAsciiValue);
                        }

                    } else if (currentAsciiValue >= 97 && currentAsciiValue <= 122) {

                        if (newAsciiValue > 122) {
                            let secondDifference = newAsciiValue - 122;
                            let loweredStart = 97 + secondDifference - 1;
                            newSymbolResult = String.fromCharCode(loweredStart);
                        } else {
                            newSymbolResult = String.fromCharCode(newAsciiValue);
                        }
                    }

                    output.push(newSymbolResult);
                }
            }

            console.log(`Successful encryption: ${output.join("")}`);
        } else {
            console.log("Invalid input!");
        }
    }
}

songEncryption([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);