function solve(input) {

    let companiesList = {};

    for (const line of input) {
        let [companyName, employeeId] = line.split(" -> ");

        if (!companiesList.hasOwnProperty(companyName)) {
            companiesList[companyName] = [];
        }

        if (!companiesList[companyName].includes(employeeId)) {
            companiesList[companyName].push(employeeId);
        }
    }


    let result = Object.keys(companiesList).sort((a, b) => a.localeCompare(b))
        .forEach((kvp) => {
            console.log(kvp);
            console.log(`-- ${companiesList[kvp].join("\n-- ")}`);
        });
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);