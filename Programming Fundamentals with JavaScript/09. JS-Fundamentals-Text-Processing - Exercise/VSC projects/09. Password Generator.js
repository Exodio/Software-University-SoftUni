function solve([textStr1 = "", textStr2 = "", wordStr = ""]) {

    let password = (textStr1 + textStr2).split("");
    let wordStrIndex = -1;

    for (let i = 0; i < password.length; i++) {

        if ("aeiou".includes(password[i])) {

            if (wordStrIndex === wordStr.length - 1) {
                wordStrIndex = 0;
            } else {
                wordStrIndex++;
            }

            password[i] = wordStr.charAt(wordStrIndex).toUpperCase();
        }
    }


    console.log(`Your generated password is ${password.reverse("").join("")}`);
}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);