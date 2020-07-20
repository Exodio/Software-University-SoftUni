function solve(arrInput) {
    let guestsList = [];

    for (let infoLine of arrInput) {
        let infoInput = infoLine.split(" ");
        let guestName = infoInput[0];

        if (!infoInput.includes("not")) {

            if (!guestsList.includes(guestName)) {
                guestsList.push(guestName);
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        } else {

            if (guestsList.includes(guestName)) {
                guestsList = guestsList.filter((eachGuestsName) => eachGuestsName !== guestName);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }
    console.log(guestsList.join("\n"));

}
solve([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!",
]);