function solve(input) {

    let arrResult = [];
    let objData = {};

    for (const element of input) {
        let [name, level, items] = element.split(" / ");

        objData = {
            name: name,
            level: Number(level),
            items: items ? items.split(", ") : [],
        }

        arrResult.push(objData);
    }

    console.log(JSON.stringify(arrResult));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);