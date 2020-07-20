function solve(input) {
    let dungeons = input.split("|");

    let currentHealth = 100;
    let bitcoinsFound = 0;
    let bestRoomCount = 0;
    let monsterName = "";
    let deathCheck = true;

    for (let eachElement of dungeons) {
        bestRoomCount++;
        let elementTokens = eachElement.split(" ");
        let command = elementTokens[0];
        let number = Number(elementTokens[1]);

        if (command === "potion") {
            let healingIncome = number;

            if (currentHealth + number > 100) {
                healingIncome = 100 - currentHealth;
                currentHealth = 100;

            } else {
                currentHealth += number;
            }

            console.log(`You healed for ${healingIncome} hp.`);
            console.log(`Current health: ${currentHealth} hp.`);

        } else if (command === "chest") {
            bitcoinsFound += number;
            console.log(`You found ${number} bitcoins.`);

        } else {
            monsterName = command;
            currentHealth -= number;

            if (currentHealth <= 0) {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoomCount}`);
                deathCheck = false;
                break;
            } else {
                console.log(`You slayed ${monsterName}.`);
            }
        }
    }

    if (deathCheck) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoinsFound}`);
        console.log(`Health: ${currentHealth}`);

    }

}