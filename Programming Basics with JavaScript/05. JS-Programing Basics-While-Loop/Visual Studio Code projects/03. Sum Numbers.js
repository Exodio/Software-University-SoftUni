function solve(input) {
    let data = String(input.shift());

    let log = 0;

    while (data !== "Stop") {

        let number = Number(data);
        log += number;

        data = Number(input.shift());
    }

    console.log(log);
}
solve(["10",
    "20",
    "30",
    "45",
    "Stop",
]);