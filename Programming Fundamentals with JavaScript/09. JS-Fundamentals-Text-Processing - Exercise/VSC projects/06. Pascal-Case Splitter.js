function solve(input) {

    let result = [];
    let currentWord = "";

    for (let i = 0; i < input.length; i++) {

        let eachChar = input[i];
        let upperCaseCheck = (char) => char === char.toUpperCase();

        if (!upperCaseCheck(eachChar) || (Number(i) === 0)) {
            currentWord += eachChar;
        } else if (upperCaseCheck(eachChar) || (Number(i) === input.length - 1)) {
            result.push(currentWord);

            currentWord = eachChar;
        }

        if (Number(i) === input.length - 1) {
            result.push(currentWord);
        }
    }


    console.log(result.join(", "));
}

solve('HoldTheDoor');