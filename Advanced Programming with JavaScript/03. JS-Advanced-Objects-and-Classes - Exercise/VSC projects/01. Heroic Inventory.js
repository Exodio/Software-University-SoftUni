// function solve(input) {

//     let data = [];
//     let registerObj = {};

//     for (const line of input) {
//         let [name, level, items] = line.split(" / ");

//         registerObj = {
//             name: name,
//             level: Number(level),
//             items: items ? items.split(", ") : [],
//         }

//         data.push(registerObj);
//     }

//     console.log(JSON.stringify(data));
// }
function solve(input) {

    let data = [];
    let registerObj = {};

    for (const line of input) {
        let [name, level, items] = line.split(" / ");
        level = Number(level);

        if (items === undefined) {
            items = [];
        } else {
            items = items.split(", ");
        }
        
        registerObj = {
            name: name,
            level: level,
            items: items,
        }

        data.push(registerObj);
    }

    console.log(JSON.stringify(data));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);