function solve(input) {
    let firstEmployeeEfficiency = Number(input.shift());
    let secondEmployeeEfficiency = Number(input.shift());
    let thirdEmployeeEfficiency = Number(input.shift());

    let studentsCount = Number(input.shift());

    let answersPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    let hoursCounter = 0;

    while (studentsCount > 0) {
        hoursCounter++;

        studentsCount -= answersPerHour;

        if (hoursCounter % 4 === 0) {
            hoursCounter++;
        }
    }
    console.log(`Time needed: ${hoursCounter}h.`);

}
solve([5, 6, 4, 20]);