function solve(input) {

    let resultArr = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === "add") {
            resultArr.push(i + 1);
        } else if (command === "remove") {
            resultArr.pop();
        }
    }

    if (resultArr.length > 0) {
        console.log(resultArr.join("\n"));
    } else {
        console.log("Empty");
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add'
]);