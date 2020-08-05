function fancyBarcode(input) {

    let barcodeInput = Number(input.shift());
    let regexPattern = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g;

    for (let i = 0; i < barcodeInput; i++) {
        let barcode = input.shift();
        let validator = barcode.match(regexPattern);

        if (validator !== null) {
            let numbers = /[\d]/g;
            let numbersMatch = validator[0].match(numbers);

            if (numbersMatch === null) {
                console.log(`Product group: 00`);
            } else {
                let print = numbersMatch.join("");
                console.log(`Product group: ${print}`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcode([
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
    ]

);