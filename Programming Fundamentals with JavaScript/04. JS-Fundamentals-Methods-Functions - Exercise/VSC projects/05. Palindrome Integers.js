function palindromeCheck(arrInput) {

    function reversingNumbers(eachNumInArr) {
        let inputInReverse = "";
        while (eachNumInArr > 0) {
            let lastDigit = eachNumInArr % 10;
            inputInReverse += lastDigit;
            eachNumInArr = Math.trunc(eachNumInArr / 10);
        }
        return Number(inputInReverse);
    }

    for (let number of arrInput) {
        let reversedNumber = reversingNumbers(number);

        if (number === reversedNumber) {
            console.log("true");
        } else {
            console.log("false");
        }
    }

}
palindromeCheck([123, 323, 421, 121]);