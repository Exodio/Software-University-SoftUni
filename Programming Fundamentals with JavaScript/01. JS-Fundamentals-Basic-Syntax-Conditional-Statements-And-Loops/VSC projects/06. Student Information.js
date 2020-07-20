function solve(input) {

    let studentName = String(input.shift());
    let age = Number(input.shift());
    let grade = Number(input.shift());

    console.log(`Name: ${studentName}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
solve(["John",
    "15",
    "5.54678"]);