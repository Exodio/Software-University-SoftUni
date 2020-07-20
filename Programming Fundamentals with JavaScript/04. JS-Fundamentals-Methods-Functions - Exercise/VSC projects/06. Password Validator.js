function passwordValidator(passwordInput) {
    let enoughLengthCheck = false;
    let onlyLetterAndDigitsCheck = true;
    let digitsCount = 0;

    if (passwordInput.length >= 6 && passwordInput.length <= 10) {
        enoughLengthCheck = true;
    }

    for (let i = 0; i < passwordInput.length; i++) {

        if (passwordInput[i].charCodeAt(0) >= 48 && passwordInput[i].charCodeAt(0) <= 57) { // digits check
            digitsCount++;
        } else if ((passwordInput[i].charCodeAt(0) >= 65 && passwordInput[i].charCodeAt(0) <= 90) || (passwordInput[i].charCodeAt(0) >= 97 && passwordInput[i].charCodeAt(0) <= 122)) { // letters check
            continue;
        } else {
            onlyLetterAndDigitsCheck = false;
        }
    }

    if (enoughLengthCheck === true && digitsCount >= 2 && onlyLetterAndDigitsCheck === true) {
        console.log("Password is valid");
    } else {
        if (!enoughLengthCheck) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!onlyLetterAndDigitsCheck > 0) {
            console.log("Password must consist only of letters and digits");
        }
        if (digitsCount < 2) {
            console.log("Password must have at least 2 digits");
        }
    }

}
passwordValidator('logIn');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');