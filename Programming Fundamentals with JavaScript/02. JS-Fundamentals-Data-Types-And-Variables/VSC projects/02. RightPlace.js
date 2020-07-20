function rightPlace(stringParameter1, charParameter, stringParameter2) {
    let result = stringParameter1.replace("_", charParameter);

    if (result === stringParameter2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I', 'Strong');