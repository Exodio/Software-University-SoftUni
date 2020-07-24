function extractEmails(input) {

    let text = input[0];
    let regexPattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g; //Explanation avaliable in exercise doc under the exercise!
    let matchLine = text.match(regexPattern);

    if (matchLine) {
        for (const line of matchLine) {
            console.log(line.trim());
        }
    }
}

extractEmails(["Please contact us at: support@github.com."]);