function solve(input) {

    let arr = input.shift().split(" ").map(Number);
    let commandLine = input.shift();

    while (commandLine !== "end") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        switch (command) {
            case "swap":
                let oldElement = arr[index1];
                let newElement = arr[index2];
                arr[index1] = newElement;
                arr[index2] = oldElement;
                break;

            case "multiply":
                let firstIndex = arr[index1];
                let secondIndex = arr[index2];
                let multiply = firstIndex * secondIndex;
                arr[index1] = multiply;
                break;

            case "decrease":
                arr = arr.map(x => x - 1);
                break;
        }
        commandLine = input.shift();

    }
    let result = arr.join(", ");
    console.log(result);
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);