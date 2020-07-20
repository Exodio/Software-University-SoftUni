function solution(firstChar, lastChar) {
    let firstParameter = firstChar.charCodeAt();
    let lastParameter = lastChar.charCodeAt();

    let minValue = Math.min(firstParameter, lastParameter);
    let maxValue = Math.max(firstParameter, lastParameter);

    let charsOutput = charsInRange(minValue, maxValue);
    console.log(allSymbolsJoined(charsOutput));

    function charsInRange(firstSymbol, lastSymbol) {
        let characters = [];
        for (let i = (firstSymbol + 1); i < lastSymbol; i++) {
            let symbolSum = charValue(i);
            characters.push(symbolSum);
        }
        return characters;
    }

    function charValue(charAsNumber) {
        return String.fromCharCode(charAsNumber);
    }

    function allSymbolsJoined(arrOfChars) {
        let result = "";
        for (let i = 0; i < arrOfChars.length; i++) {
            let oneLinedSymbolSum = arrOfChars[i];
            result += `${oneLinedSymbolSum}${" "}`;
        }
        return result;
    }
}
solution('a',
    'd'
);