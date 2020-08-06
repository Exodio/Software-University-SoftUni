function heroesOfLogicAndCodeVII(input) {

    let numberOfHeroesInput = Number(input.shift());
    let partyObj = {};

    for (i = 0; i < numberOfHeroesInput; i++) {
        let [heroName, heroHealth, heroMana] = input.shift().split(" ");
        heroHealth = Number(heroHealth);
        heroMana = Number(heroMana);
        
        partyObj[heroName] = {
            hp: heroHealth,
            mp: heroMana,
        };
    }

    let commandLine = input.shift();
    let maxHp = 100;
    let maxMp = 200;

    while (commandLine !== "End") {
        let [command, firstArg, secondArg, thirdArg] = commandLine.split(" - ");

        switch (command) {
            case "CastSpell":
                let mpNeeded = Number(secondArg);

                if (partyObj[heroName].mp - mpNeeded >= 0) {
                    partyObj[heroName].mp -= mpNeeded;
                    console.log(`${firstArg} has successfully cast ${thirdArg} and now has ${partyObj[heroName].mp} MP!`);
                } else {
                    console.log(`${firstArg} does not have enough MP to cast ${thirdArg}!`);
                }
                break;

            case "TakeDamage":
                let damageTaken = Number(firstArg);

                if (partyObj[heroName].hp - damageTaken > 0) {
                    partyObj[heroName].hp -= damageTaken;
                    console.log(`${firstArg} was hit for ${secondArg} HP by ${thirdArg} and now has ${partyObj[heroName].hp} HP left!`);
                } else {
                    delete partyObj[heroName];
                    console.log(`${firstArg} has been killed by ${thirdArg}!`);
                }
                break;

            case "Recharge":
                let rechargingMp = Number(secondArg);

                if (partyObj[heroName].mp + rechargingMp > maxMp) {
                    let rechargedValue = 200 - partyObj[heroName].mp;
                    partyObj[heroName].mp = 200;

                    console.log(`${firstArg} recharged for ${rechargedValue} MP!`);
                } else {
                    partyObj[heroName].mp += rechargingMp;
                    console.log(`${firstArg} recharged for ${rechargingMp} MP!`);
                }
                break;

            case "Heal":
                let rechargingHp = Number(secondArg);

                if (partyObj[heroName].hp + rechargingHp > maxHp) {
                    let healedValue = 100 - partyObj[heroName].hp;
                    partyObj[heroName].hp = 100;

                    console.log(`${firstArg} healed for ${healedValue} HP!`);
                } else {
                    partyObj[heroName].hp += rechargingHp;
                    console.log(`${firstArg} healed for ${rechargingMp} HP!`);
                }
                break;
        }
        commandLine = input.shift();
    }

    let entriesArr = Object.entries(partyObj);
    let sortedEntries = entriesArr.sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]));

    for (const kvp of sortedEntries) {
        console.log(`${kvp[0]}`);
        console.log(`${kvp[1].hp}`);
        console.log(`${kvp[2].mp}`);
    }
}

heroesOfLogicAndCodeVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);