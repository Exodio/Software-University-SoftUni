function gradeScore(input) {
    let gradeInput = input;

    if (gradeInput >= 2.00 && gradeInput <= 2.99) {
        return "Fail";
    } else if (gradeInput >= 3.00 && gradeInput <= 3.49) {
        return "Poor";
    } else if (gradeInput >= 3.50 && gradeInput <= 4.49) {
        return "Good";
    } else if (gradeInput >= 4.50 && gradeInput <= 5.49) {
        return "Very good";
    } else if (gradeInput >= 5.50 && gradeInput <= 6.00) {
        return "Excellent";
    }
}
let resultOutput = gradeScore(3.33);
console.log(resultOutput);