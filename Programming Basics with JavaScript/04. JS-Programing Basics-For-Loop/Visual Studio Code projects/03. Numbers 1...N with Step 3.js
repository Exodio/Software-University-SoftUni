function number1ToNWith3Steps(input) {
    let n = Number(input.shift());

    for (let i = 1; i <= n; i += 3) {
        console.log(i);

    }
}
number1ToNWith3Steps(["10"]);