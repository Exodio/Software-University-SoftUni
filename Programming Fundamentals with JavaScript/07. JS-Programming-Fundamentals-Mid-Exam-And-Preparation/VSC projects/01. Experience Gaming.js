function solve(arr) {
    let input = arr.map(Number);
    let neededExp = Number(input.shift());
    let battlesCount = Number(input.shift());

    let gamesCounter = 0;
    let gainedExp = 0;

    for (let i = 0; i < battlesCount; i++) {
        gamesCounter++;

        if (gamesCounter % 3 === 0) {
            gainedExp += input[i] + input[i] * 0.15;
        } else if (gamesCounter % 5 === 0) {
            gainedExp += input[i] - input[i] * 0.10;
        } else {
            gainedExp += input[i];
        }

        if (neededExp <= gainedExp) {
            console.log(`Player successfully collected his needed experience for ${gamesCounter} battles.`);
            return;
        }

    }
    console.log(`Player was not able to collect the needed experience, ${(neededExp - gainedExp).toFixed(2)} more needed.`);

}