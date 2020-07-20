function solve(arrInput) {
    let numbers = arrInput.shift().split(" ").map(Number);

    for (let command of arrInput) {
        let [commandInput, firstValue, secondValue] = command.split(" ");
        firstValue = Number(firstValue);
        secondValue = Number(secondValue);

        switch (commandInput) {
            case "Add":
                numbers.push(firstValue);
                break;

            case "Remove":
                numbers = numbers.filter(eachElement => eachElement !== firstValue);
                break;

            case "RemoveAt":
                numbers.splice(firstValue, 1);
                break;

            case "Insert":
                numbers.splice(secondValue, 0, firstValue);
                break;
        }
    }
    console.log(numbers.join(" "));

}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);