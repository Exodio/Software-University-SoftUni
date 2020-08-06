function heroesOfLogicAndCodeVII(input) {

    let numberOfHeroesInput = input.shift();
    let partyObj = {};

    while (numberOfHeroesInput > 0) {
        let [heroName, heroHealth, heroMana] = input.shift().split(" ");
        heroHealth = Number(heroHealth);
        heroMana = Number(heroMana);
        partyObj[heroName] = {
            hp: heroHealth,
            mp: heroMana,
        };

        numberOfHeroesInput--;
    }

    let commandLine = input.shift();

    while (commandLine !== "End") {
        let tokens = commandLine.split(" - ");

        switch (tokens[0]) {
            case "CastSpell":
                castSpell(tokens[1], tokens[2], tokens[3]);
                break;
            case "TakeDamage":
                takeDamage(tokens[1], tokens[2], tokens[3]);
                break;
            case "Recharge":
                recharge(tokens[1], tokens[2]);
                break;
            case "Heal":
                heal(tokens[1], tokens[2]);
                break;
        }

        commandLine = input.shift();
    }

    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);

        if (partyObj[heroName].mp - mpNeeded >= 0) {
            partyObj[heroName].mp -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${partyObj[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }

    }

    function takeDamage(heroName, damage, attacker) {
        damage = Number(damage);

        if (partyObj[heroName].hp - damage >= 0) {
            partyObj[heroName].hp -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${partyObj[heroName].hp} HP left!`);
        } else {
            delete partyObj[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }

    function recharge(heroName, amount) {
        amount = Number(amount);

        if (partyObj[heroName].mp + amount > 200) {
            let buff = 200 - partyObj[heroName].mp;
            partyObj[heroName].mp = 200;
            console.log(`${heroName} recharged for ${buff} MP!`);
        } else {
            partyObj[heroName].mp += amount;
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
    }

    function heal(heroName, amount) {
        amount = Number(amount);

        if (partyObj[heroName].hp + amount > 100) {
            let healedValue = 100 - partyObj[heroName].hp;
            partyObj[heroName].hp = 100;
            console.log(`${heroName} healed for ${healedValue} HP!`);
        } else {
            partyObj[heroName].hp += amount;
            console.log(`${heroName} healed for ${amount} HP!`);
        }
    }

    let entriesArr = Object.entries(partyObj);
    let nameAscendingSorting = entriesArr.sort((a, b) => a[0].localeCompare(b[0]));
    let hpDecendingSorting = nameAscendingSorting.sort((a, b) => b[1].hp - a[1].hp);

    for (let kvp of hpDecendingSorting) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1].hp}`);
        console.log(`  MP: ${kvp[1].mp}`);
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