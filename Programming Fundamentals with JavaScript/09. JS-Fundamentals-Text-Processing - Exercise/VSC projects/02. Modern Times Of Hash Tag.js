function solve(text) {

    let eachSpecialWord = text.split(" ")
        .filter((eachWord) => eachWord.startsWith('#') && eachWord.length > 1)
        .map((eachWord) => eachWord.slice(1))
        .filter((eachWord) => eachWord.split("").filter((char) => char.toLowerCase().charCodeAt(0) >= 97 &&
            char.toLowerCase().charCodeAt(0) <= 122).length === eachWord.length);


    console.log(eachSpecialWord.join("\n"));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');