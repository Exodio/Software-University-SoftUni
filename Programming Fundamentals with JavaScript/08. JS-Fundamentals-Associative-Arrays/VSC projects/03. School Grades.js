function solve(input) {
    let students = new Map();

    for (const eachLine of input) {
        let tokens = eachLine.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (students.has(name)) {
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);

            students.set(name, allGrades);
        } else {
            students.set(name, grades);
        }
    }

    let studentEntries = Array.from(students.entries());
    let sortedStudentEntries = studentEntries.sort((a, b) => {
        let studentGradesA = a[1];
        let studentGradesB = b[1];
        let averageGradesA = getAverageGrade(studentGradesA);
        let averageGradesB = getAverageGrade(studentGradesB);

        return averageGradesA - averageGradesB;
    });

    for (const kvp of sortedStudentEntries) {
        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
    }


    function getAverageGrade(grades) {
        let gradeSum = 0;

        for (const grade of grades) {
            gradeSum += grade;
        }

        return gradeSum / grades.length;
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);