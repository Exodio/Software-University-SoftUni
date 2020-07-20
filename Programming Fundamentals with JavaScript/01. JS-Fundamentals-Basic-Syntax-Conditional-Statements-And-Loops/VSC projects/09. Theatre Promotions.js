function solve(input) {
    let dayType = String(input.shift());
    let personAge = Number(input.shift());

    if (dayType === "Weekday") {
        if (personAge >= 0 && personAge <= 18) {
            console.log("12$");
        } else if (personAge > 18 && personAge <= 64) {
            console.log("18$");
        } else if (personAge > 64 && personAge <= 122) {
            console.log("12$");
        } else {
            console.log("Error!")
        }
    } else if (dayType === "Weekend") {
        if (personAge >= 0 && personAge <= 18) {
            console.log("15$");
        } else if (personAge > 18 && personAge <= 64) {
            console.log("20$");
        } else if (personAge > 64 && personAge <= 122) {
            console.log("15$");
        } else {
            console.log("Error!")
        }
    } else if (dayType === "Holiday") {
        if (personAge >= 0 && personAge <= 18) {
            console.log("5$");
        } else if (personAge > 18 && personAge <= 64) {
            console.log("12$");
        } else if (personAge > 64 && personAge <= 122) {
            console.log("10$");
        } else {
            console.log("Error!")
        }
    }
}
solve(["Holiday",
    -42
]);