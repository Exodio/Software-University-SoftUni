function solve(input) {
    let studentName = String(input.shift());

    let counter = 0;   // It can also be 1 as we start from class 1

    let gradeSum = 0;

    while (counter < 12) {   // If we start from class 1 the last class would also need to be counter <= 12
        let grade = Number(input.shift());

        if (grade >= 4.00) {
            gradeSum += grade;

            counter++;
        }
    }

    console.log(`${studentName} graduated. Average grade: ${(gradeSum / counter).toFixed(2)}`);   //If we use starting class 1 we need to place / 12 instead of counter, otherwise there will be a 13th grade
}

solve(["Pesho",
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5,
]);