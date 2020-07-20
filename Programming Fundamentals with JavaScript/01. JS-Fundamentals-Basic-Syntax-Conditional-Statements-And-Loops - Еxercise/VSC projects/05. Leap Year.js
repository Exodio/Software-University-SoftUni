function solve(input) {
    let year = Number(input);

    let firstFactor = (year % 4 === 0) && (year % 100 !== 0);
    let secondFactor = year % 400 === 0;

    if (firstFactor || secondFactor) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
solve(4);