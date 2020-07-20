function evenPowerOf2(input) {
    let n = Number(input.shift());

    for (i = 0; i <= n; i += 2) {

        console.log(Math.pow(2, i));
    }
}
evenPowerOf2(["5"]);