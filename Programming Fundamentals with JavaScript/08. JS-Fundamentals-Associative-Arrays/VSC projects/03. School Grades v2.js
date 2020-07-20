function solve(input) {
    let students = {};

    for (const eachLine of input) {
        let tokens = eachLine.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (students[name]) {
            let oldGrades = students[name];
            let allGrades = oldGrades.concat(grades);

            students[name] = allGrades;
        } else {
            students[name] = grades;
        }
    }


    let studentEntries = Object.keys(students)
        .sort((a, b) => students[a].reduce((a, b) => a + b, 0) / students[a].length - students[b].reduce((a, b) => a + b, 0) / students[b].length)
        .forEach(key => {
            console.log(`${key}: ${students[key].join(", ")}`);
        });
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);