function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;

    let helmetRepairSum = 0;
    let swordRepairSum = 0;
    let shieldRepairSum = 0;
    let armorRepairSum = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
            helmetRepairSum = trashedHelmet * helmetPrice;
        }
        if (i % 3 === 0) {
            trashedSword++;
            swordRepairSum = trashedSword * swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            trashedShield++;
            shieldRepairSum = trashedShield * shieldPrice;

            if (trashedShield % 2 === 0) {
                trashedArmor++;
                armorRepairSum = trashedArmor * armorPrice;
            }
        }
    }
    let expensesSum = helmetRepairSum + swordRepairSum + shieldRepairSum + armorRepairSum;

    console.log(`Gladiator expenses: ${expensesSum.toFixed(2)} aureus`);
}
console.log(7,
    2,
    3,
    4,
    5
);