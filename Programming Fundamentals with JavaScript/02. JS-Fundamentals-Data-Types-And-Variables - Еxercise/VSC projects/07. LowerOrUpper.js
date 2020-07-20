function CharCaseCheck(input) {
    let character = String(input);
    if (character.toLowerCase() !== character) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
CharCaseCheck('L');