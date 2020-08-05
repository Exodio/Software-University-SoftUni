function fancyBarcode(input) {

    let barcodesCountInput = input.shift();

    for (let i = 0; i < barcodesCountInput; i++) { //We loop as many times as the barcodes listed
        let barcodeLine = input.shift(); 

        let regexPattern = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g;
        let match = barcodeLine.match(regexPattern); //We validate the pattern of the regex input

        if (match) {
            let barcodeDigits = /[\d]/g; //We look for the listed digits in the product group of the barcode
            let digitsMatch = match[0].match(barcodeDigits); //0th index of the result is the result from the regex match

            if (!digitsMatch) { //If the group is the default one only if it is listed with no numbers
                console.log(`Product group: 00`);
            } else {
                let result = digitsMatch.join(""); // if we do have numbers and they are valid we print them
                console.log(`Product group: ${result}`); //We concatenate all the digits found in the product group of the barcode
            }

        } else {
            console.log("Invalid barcode"); //if the match(validation) from the regex pattern was not successful
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