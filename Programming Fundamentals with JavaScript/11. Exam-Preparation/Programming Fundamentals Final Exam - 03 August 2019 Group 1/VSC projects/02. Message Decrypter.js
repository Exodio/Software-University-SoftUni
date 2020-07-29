function messageDecrypter(input) {

    for (const eachLine of input.slice(1)) {
        regexPattern = /^([$%])([A-Z][a-z]{3,})\1: \[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/g;
        let validator = regexPattern.exec(eachLine);

        if (validator) {
            let tag = validator[2];
            let outputMessage = String.fromCharCodeAt(validator[3]) + String.fromCharCode(validator[4]) + String.fromCharCode(validator[5]);

            console.log(`${tag}: ${outputMessage}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

messageDecrypter([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);