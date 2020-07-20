function solve(start, end) {

    let printInOneLine = "";
    let sum = 0;

    for (let i = start; i <= end; i += 1) {
        printInOneLine += i + " ";
        sum += i;
    }

    console.log(printInOneLine);
    console.log(`Sum: ${sum}`);
}
solve(5,
    10
);