function solve(input) {
    let inventory = input.shift().split(", ");
    let commandLine = input.shift();

    while (commandLine !== "Craft!") {
        let command = commandLine.split(" - ");
        let item = command[1];

        if (command.includes("Collect")) {

            if (!inventory.includes(item)) {
                inventory.push(item);
            }
            commandLine = input.shift();

        } else if (command.includes("Drop")) {

            if (inventory.includes(item)) { //Option 2, without arrow functions available in Inventory Demo
                let isExist = (element) => element === item;
                let removeItemIndex = inventory.findIndex(isExist);
                inventory.splice(removeItemIndex, 1);
            }
            commandLine = input.shift();

        } else if (commandLine.includes("Combine Items")) {
            let secondCommand = item.split(":");
            let oldItem = secondCommand[0];
            let newItem = secondCommand[1];

            if (inventory.includes(oldItem)) { //Option 2, without arrow functions available in Inventory Demo
                let isExist = (element) => element === oldItem;
                let addAfter = inventory.findIndex(isExist);
                inventory.splice(addAfter + 1, 0, newItem);
            }
            commandLine = input.shift();

        } else if (commandLine.includes("Renew")) {

            if (inventory.includes(item)) { //Option 2, without arrow functions available in Inventory Demo
                let isExist = (element) => element === item;
                let removeItem = inventory.findIndex(isExist);
                inventory.splice(removeItem, 1);
                inventory.push(item);
            }
            commandLine = input.shift();

        }
    }
    let result = inventory.join(", "); //Make it like this otherwise you may get inventory.join is not a function in judge!
    console.log(result);

}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);