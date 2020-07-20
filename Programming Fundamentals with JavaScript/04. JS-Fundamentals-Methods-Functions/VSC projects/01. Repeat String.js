function repeat(stringInput, countRepeater) {
    let result = "";

    for (let i = 0; i < countRepeater; i++) {
        result += stringInput;
    }
    return result;

}
let resultOutput = repeat("abc", 3);
console.log(resultOutput);