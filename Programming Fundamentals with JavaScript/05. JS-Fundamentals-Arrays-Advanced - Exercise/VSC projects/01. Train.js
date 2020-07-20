function solve(arrInput) {

    let startingWagons = arrInput.shift().split(" ").map(Number);
    let maxWagonCapacity = Number(arrInput.shift());

    for (let i = 0; i < arrInput.length; i++) {
        let commandInput = arrInput[i].split(" ");

        if (commandInput.length === 2) {
            startingWagons.push(commandInput[1]);
        } else if (commandInput.length === 1) {
            let passangersToAdd = Number(commandInput[0]);

            for (let i = 0; i < startingWagons.length; i++) {

                if (startingWagons[i] + passangersToAdd <= maxWagonCapacity) {
                    startingWagons[i] += passangersToAdd;
                    break;
                }

            }
        }

    }
    console.log(startingWagons.join(' '))

}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);











// function solve(arrInput) {

//     let input = arrInput.slice();
//     let trainWagons = arrInput[0].split(" ").map(Number);

//     let maxWagonCapacity = Number(arrInput[1]);
//     let commandInitiation = input.slice(2);

//     for (let command of commandInitiation) {
//         let commandValue = command.split(" ");

//         if (commandValue.length === 2) {
//             let newWagon = Number(commandValue[1]);
//             trainWagons.push(newWagon);
//         } else {
//             let newPassangers = Number(commandValue[0]);

//             for (let newWagon in trainWagons) {
//                 let currentPassangers = trainWagons[newWagon];

//                 if ((newPassangers + currentPassangers) <= maxWagonCapacity) {
//                     trainWagons[newWagon] += newPassangers;
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(wagons.join(" "));

// }
// solve(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'
// ]);