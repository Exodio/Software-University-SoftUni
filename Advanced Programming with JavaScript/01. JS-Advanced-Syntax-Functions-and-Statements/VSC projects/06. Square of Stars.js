function solve(number) {

    if (number > 0) {
        for (let i = 0; i < number; i++) {
            console.log("* ".repeat(number));
        }
    } else {
        console.log("* ".repeat(5));
    }
}

solve(1);