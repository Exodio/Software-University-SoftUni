function solve(jsonString) {
    let personType = JSON.parse(jsonString);

    for (let objectKeyType in personType) {
        console.log(`${objectKeyType}: ${personType[objectKeyType]}`);
    }

}
solve('{"name": "George", "age": 40, "town": "Sofia"}');