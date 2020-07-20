function amazingNumbers(input) {
    let numberToString = String(input);
    let sum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
    }

    let result = String(sum);
    if (result.includes("9")) {
        console.log(`${input} Amazing? True`)
    } else {
        console.log(`${input} Amazing? False`)
    }
}
amazingNumbers(999);