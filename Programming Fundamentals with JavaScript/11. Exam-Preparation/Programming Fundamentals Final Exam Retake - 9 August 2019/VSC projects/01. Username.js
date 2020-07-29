function username(input) {

    let usernameRequest = input.shift();

    for (const eachLine of input) {

        if (eachLine === "Sign up") {
            break;
        }

        let command = eachLine.split(" ");

        switch (command[0]) {

            case "Case":
                if (command[1] === "lower") {
                    usernameRequest = usernameRequest.toLowerCase();
                    console.log(usernameRequest);
                } else if (command[1] === "upper") {
                    usernameRequest = usernameRequest.toUpperCase();
                    console.log(usernameRequest);
                }
                break;

            case "Reverse":
                if (command[1] >= 0 && command[2] <= usernameRequest.length) {
                    let reversedSubstring = usernameRequest.substring(Number(command[1]), Number(command[2]) + 1);
                    let resultArr = reversedSubstring.split("");
                    let reversedResultArr = resultArr.reverse();
                    console.log(reversedResultArr.join(""));
                }
                break;

            case "Cut":
                if (usernameRequest.includes(command[1])) {
                    let substringIndex = usernameRequest.indexOf(command[1]);
                    usernameRequest = usernameRequest.substring(0, substringIndex) + usernameRequest.substring(substringIndex + (command[1].length));
                    console.log(usernameRequest);
                } else {
                    console.log(`The word ${usernameRequest} doesn't contain ${command[1]}.`);
                }
                break;

            case "Replace":
                let regExp = new RegExp(command[1], "g");
                usernameRequest = usernameRequest.replace(regExp, "*");
                console.log(usernameRequest);
                break;

            case "Check":
                if (usernameRequest.includes(command[1])) {
                    console.log("Valid");
                } else {
                    console.log(`Your username must contain ${command[1]}.`);
                }
                break;
        }
    }
}

username(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']);