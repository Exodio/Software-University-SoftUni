function solve(names) {

    let nameWanted = names[0];
    let regexPattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = nameWanted.match(regexPattern);

    if (result !== null) {
        console.log(result.join(" "));
    }
}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]);