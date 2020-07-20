function solve(input) {
    let neighborhood = input.shift().split("@").map(Number);
    let command = input.shift();
    let currentIndex = 0;

    while (command !== "Love!") {
        let check = command.split(" ");
        let jumpLength = +check[1];

        currentIndex += jumpLength;

        if (currentIndex >= neighborhood.length) {
            currentIndex = 0;
        }

        if (neighborhood[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            neighborhood[currentIndex] -= 2;
            if (neighborhood[currentIndex] === 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }

        command = input.shift();
    }

    console.log(`Cupid's last position was ${currentIndex}.`);

    let missionSuccess = true;
    let counter = 0;

    for (let currentHouse of neighborhood) {
        if (currentHouse !== 0) {
            missionSuccess = false;
            counter++;
        }
    }

    if (missionSuccess) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }
}
solve([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!",
]);