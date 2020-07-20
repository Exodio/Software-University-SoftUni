function solve(input) {
    let freeSpaceWidth = Number(input.shift());
    let freeSpaceLength = Number(input.shift());
    let freeSpaceHigth = Number(input.shift());

    let freeSpaceTotal = freeSpaceWidth * freeSpaceLength * freeSpaceHigth;

    let commandCheck = input.shift(); //If command = Done we won't go into the while loop

    while (commandCheck !== "Done") {
        let commandIntoBox = Number(commandCheck); //If command is != Done we go into the while and check the box input
        freeSpaceTotal -= commandIntoBox;

        if (freeSpaceTotal < 0) {
            break;
        }

        commandCheck = input.shift();
    }

    if (freeSpaceTotal < 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpaceTotal)} Cubic meters more.`)
    } else {
        console.log(`${freeSpaceTotal} Cubic meters left.`);
    }
}
solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
]);