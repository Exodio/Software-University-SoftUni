function solve(input) {
    let command = String(input.shift());

    while (command !== "Stop") {
        console.log(command);
        command = String(input.shift());
    }

}
solve(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
]);