function solve(input) {
    let username = String(input.shift());
    let password = Number(input.shift());

    let data = input.shift();

    while (data !== password) {
        data = input.shift();

    }

    console.log(`Welcome ${username}!`);

}
solve(["Nakov",
    "1234",
    "pass",
    "1324",
    "1234",
]);