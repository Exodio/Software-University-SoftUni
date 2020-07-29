function password(input) {
    
    let inputIndicator = input.shift();

    for (const eachLine of input) {
        let regexPattern = /(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/g;
        let validator = regexPattern.exec(eachLine);

        if (validator) { //If the password matches the requirements
            let encryptedPassword = validator[2] + validator[3] + validator[4] + validator[5];
            console.log(`Password: ${encryptedPassword}`);
        } else { //If the password doesn`t matche the requirements
            console.log("Try another password!");
        };
    }
}
password([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);