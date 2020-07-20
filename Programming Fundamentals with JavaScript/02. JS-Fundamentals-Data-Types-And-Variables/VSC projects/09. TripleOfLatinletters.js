function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        let firstChar = String.fromCharCode(97 + i);

        for (let j = 0; j < n; j++) {
            let secondChar = String.fromCharCode(97 + j);

            for (let k = 0; k < n; k++) {
                let thirdChar = String.fromCharCode(97 + k);

                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }
}
triplesOfLatinLetters(3);