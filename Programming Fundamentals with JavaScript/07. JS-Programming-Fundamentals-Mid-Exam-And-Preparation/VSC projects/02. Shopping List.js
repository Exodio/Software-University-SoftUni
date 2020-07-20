function solve(input) {
    let groceryList = input.shift().split("!");
    let command = input.shift();

    while (command !== "Go Shopping!") {

        if (command.includes("Urgent")) {
            let check = command.split(" ");
            let item = check[1];

            if (!groceryList.includes(item)) {
                groceryList.unshift(item);
            }
            command = input.shift();

        } else if (command.includes("Unnecessary")) {
            let check = command.split(" ");
            let item = check[1];
            let index = groceryList.indexOf(item);

            if (groceryList.includes(item)) {
                groceryList.splice(index, 1);
            }
            command = input.shift();

        } else if (command.includes("Correct")) {
            let check = command.split(" ");
            let oldItem = check[1];
            let newItem = check[2];
            let index = groceryList.indexOf(oldItem);

            if (groceryList.includes(item)) {
                groceryList.splice(index, 1, newItem);
            }
            command = input.shift();

        } else if (command.includes("Rearrange")) {
            let check = command.split(" ");
            let item = check[1];
            let index = groceryList.indexOf(item);

            if (groceryList.includes(item)) {
                groceryList.splice(index, 1);
                groceryList.push(item);
            }
            command = input.shift();

        }
    }
    console.log(groceryList.join(", "));

}
solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!",
]);

// function solve(input) {
//     let groceryList = input.shift().split("!");
//     let commandInput = input.shift();
//     while (commandInput !== "Go Shopping!") {
//         let check = commandInput.split(" ");
//         let command = check[0];
//         let item = check[1];
//         let index = groceryList.indexOf(item);
//         switch (command) {
//             case "Urgent":
//                 if (index < 0) {
//                     groceryList.unshift(item);
//                 }
//                 break;
//             case "Unnecessary":
//                 if (~index) {
//                     groceryList.splice(index, 1);
//                 }
//                 break;
//             case "Correct":
//                 let newItem = check[2];
//                 if (~index) {
//                     groceryList.splice(index, 1, newItem);
//                 }
//                 break;
//             case "Rearrange":
//                 if (~index) {
//                     groceryList.splice(index, 1);
//                     groceryList.push(item);
//                 }
//                 break;
//             default:
//                 break;
//         }
//         commandInput = input.shift();

//     }
//     console.log(groceryList.join(", "));

// }
// solve(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!",
// ]);