function solve(input) {

    let stringSequence = input.split(/\s+/);
    let isUpperCase = (text) => /^[A-Z]*$/.test(text);
    let isLowerCase = (text) => /^[a-z]*$/.test(text);

    let totalSum = 0;

    for (const key of stringSequence) {
        let result = 0;
        let numberElement = Number(key.substring(1, key.length - 1));

        let firstLetter = key.charAt(0);
        let firstLetterPosition = key.toLowerCase().charCodeAt(0) - 96;

        let lastLetter = key.charAt(key.length - 1);
        let lastLetterPosition = key.toLowerCase().charCodeAt(key.length - 1) - 96;

        if (isUpperCase(firstLetter)) {
            result = numberElement / firstLetterPosition;
            totalSum += result;
        }

        if (isLowerCase(firstLetter)) {
            result = numberElement * firstLetterPosition;
            totalSum += result;
        }

        if (isUpperCase(lastLetter)) {
            totalSum -= lastLetterPosition;
        }

        if (isLowerCase(lastLetter)) {
            totalSum += lastLetterPosition;
        }
    }


    console.log(totalSum.toFixed(2));
}

solve('A12b s17G');