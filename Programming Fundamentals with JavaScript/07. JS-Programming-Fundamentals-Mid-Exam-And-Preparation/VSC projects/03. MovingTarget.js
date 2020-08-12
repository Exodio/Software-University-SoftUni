function solve(input) {

    let targetsSequence = input[0].split(" ").map(Number);
    let commandInput = input.slice(1);

    for (let i = 0; i < commandInput.length; i++) {
        let tokens = commandInput[i].split(" ");
        let command = tokens[0];
        let firstArgument = Number(tokens[1]);
        let secondArgument = Number(tokens[2]);

        if (command === "End") {
            break;
        }

        for (let element = 0; element < targetsSequence.length; element++) {
            if (command === "Shoot") {
                if (firstArgument >= targetsSequence.length) {
                    break;
                } else if (firstArgument === element) {
                    targetsSequence[element] -= secondArgument;
                    if (targetsSequence[element] <= 0) {
                        targetsSequence.splice(firstArgument, 1);
                        break;
                    }
                }

            } else if (command === "Add") {
                if (firstArgument >= targetsSequence.length || firstArgument < 0) {
                    console.log("Invalid placement!");
                    break;
                } else if (firstArgument === element) {
                    targetsSequence.splice(firstArgument, 0, secondArgument);
                    break;
                }

            } else if (command === "Strike") {
                if (firstArgument + secondArgument >= targetsSequence.length || firstArgument - secondArgument < 0) {
                    console.log("Strike missed!");
                    break;
                } else {
                    let numberIndex = targetsSequence[firstArgument];
                    targetsSequence.splice(firstArgument - secondArgument, secondArgument);
                    let firstArgumentIndex = targetsSequence.indexOf(numberIndex);
                    targetsSequence.splice(firstArgumentIndex, secondArgument + 1);
                    break;
                }
            }
        }
    }
    console.log(targetsSequence.join("|"));
}

solve([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);