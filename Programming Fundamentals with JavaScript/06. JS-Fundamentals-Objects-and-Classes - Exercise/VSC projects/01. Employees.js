function solve(arrString) {
    let employee = {};
    arrString.forEach(name => {
        employee[name] = name.length;
    });

    for (let eachName in employee) {
        console.log(`Name: ${eachName} -- Personal Number: ${employee[eachName]}`);
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);