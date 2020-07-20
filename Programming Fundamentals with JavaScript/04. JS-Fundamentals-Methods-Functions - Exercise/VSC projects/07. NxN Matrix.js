function matrixOfNumber(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += n + " ";
    }

    for (let i = 1; i <= n; i++) {
        console.log(`${result}`);
    }
}
matrixOfNumber(3);