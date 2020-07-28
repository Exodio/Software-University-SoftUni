function registration(input) {

    let numberIndicator = input.shift();
    let registrationsCount = 0;

    for (const registrationCheck of input) {
        let regexPattern = /(U\$)(?<userName>[A-Z][a-z]{2,})\1(P@\$)(?<password>[a-z]{5,}[0-9]+)\3/g;
        let validationMatch = regexPattern.exec(registrationCheck);

        if (!validationMatch) {
            console.log("Invalid username or password");
        } else {
            console.log("Registration was successful");
            console.log(`Username: ${validationMatch[2]}, Password: ${validationMatch[4]}`);
            registrationsCount++;
        }
    }


    console.log(`Successful registrations: ${registrationsCount}`);
}
registration(["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$",
]);

// registration(["2",
//     "U$TommyU$P@$asdqwe123P@$",
//     "Sara 1232412",
// ]);