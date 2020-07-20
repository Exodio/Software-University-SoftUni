function solve(input) {
    let countOfStudents = Number(input.shift());
    let coutOfLectures = Number(input.shift());
    let initialBonus = Number(input.shift());

    let maxBonus = 0;
    let maxAttendence = 0;

    for (let i = 1; i < countOfStudents; i++) {
        let eachStudentAttendances = Number(input.shift());
        let bonusCheck = eachStudentAttendances / coutOfLectures * (5 + initialBonus);

        if (maxBonus < bonusCheck) {
            maxBonus = bonusCheck;
        }

        if (maxAttendence < eachStudentAttendances) {
            maxAttendence = eachStudentAttendances;
        }

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendence} lectures.`);

}
solve([
    '10', '0', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);

// function solve(input) {
//     let students = Number(input.shift());
//     let lectures = Number(input.shift());
//     let additionalBonus = Number(input.shift());

//     let maxAttendence = 0;

//     for (let i = 0; i < students; i++) {
//         let currentAttendence = Number(studentsAttendences[i]);

//         if (currentAttendence > maxAttendence) {
//             maxAttendence = currentAttendence;
//         }

//         let maxBonus = 0;

//         if (lectures > 0) {
//             maxBonus = currentAttendence / lectures * (5 + additionalBonus);
//         }

//     }
//     console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
//     console.log(`The student has attended ${maxAttendences} lectures.`);

// }