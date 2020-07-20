function solve(input) {
    let inventory = input.shift().split(", ");
    let commandLine = input.shift();

    while (commandLine !== "Craft!") {
        let tokens = commandLine.split(" - ");
        let command = tokens[0];
        let item = tokens[1];

        switch (command) {
            case "Collect":
                if (!inventory.includes(item)) {
                    inventory.push(item)
                }
                break;

            case "Drop":
                if (inventory.includes(item)) {
                    let itemIndex = inventory.indexOf(item); // We can check with if it exists in the arr and we can only remove it by index if we use splice!
                    inventory.splice(itemIndex, 1); //If it is below 0 it does not exist in the arr: if (itemIndex >= 0) {inventory.splcie(itemIndex, 1); }
                }
                break;

            case "Combine Items": //We take two items and we want to make the following 1,2,3 = 1,2,4,3 as [4] is considered the newItem
                let secondCommand = item.split(":"); //We split them to remove their current saparation which is item1:item2
                let oldItem = secondCommand[0]; //We can simplify this as following let [oldItem, newItem] = item.split(":")
                let newItem = secondCommand[1];
                let oldItemIndex = inventory.indexOf(oldItem); //We save the current first

                if (oldItemIndex >= 0) { //We check if the first item exists, ff it is below 0 the item is not in the arr
                    inventory.splice(oldItemIndex + 1, 0, newItem); //As the first item exists and we want to place it after the 2nd new one so we make it + 1
                }
                break;

            case "Renew":
                let itemIndex = inventory.indexOf(item);
                if (itemIndex >= 0) {
                    inventory.splice(itemIndex, 1); //If the item exists we want to remove it from the arr
                    inventory.push(item); //And then we want to add it at the end of the arr
                }
                break;
        }

        commandLine = input.shift();

    }
    let result = inventory.join(", ");  //Make it like this otherwise you may get inventory.join is not a function in judge!
    console.log(result);

}
solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);