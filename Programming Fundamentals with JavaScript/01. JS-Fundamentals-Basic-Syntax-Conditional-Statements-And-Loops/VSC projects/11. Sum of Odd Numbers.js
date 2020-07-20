function solve(input) {
    let num = Number(input);
    let sum = 0;

    for (let i = 1; i < num * 2; i++) {

        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);

}
solve(5);