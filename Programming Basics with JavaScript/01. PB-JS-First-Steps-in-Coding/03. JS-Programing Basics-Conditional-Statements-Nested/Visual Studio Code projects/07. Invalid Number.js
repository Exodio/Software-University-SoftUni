function invalidNum(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array
    let number = Number(input.shift());

    if (number >= 100 && number <= 200 && number !== 0) {
        console.log();
    } else if (number === 0) {
        console.log();
    } else {
        console.log("invalid");
    }
}
invalidNum(["0"]);