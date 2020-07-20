function solve(input) {
    let firstEmployee = Number(input.shift());
    let secondEmployee = Number(input.shift());
    let thirdEmployee = Number(input.shift());
    let peopleCount = Number(input.shift());

    let handledPeoplePerHour = firstEmployee + secondEmployee + thirdEmployee;
    let neededHours = 0;

    while (peopleCount > 0) {
        neededHours++;
        peopleCount -= handledPeoplePerHour;
    }
    neededHours += neededHours / 4;

    console.log(`Time needed: ${parseInt(neededHours)}h.`)

}
solve([5, 6, 4, 20]);