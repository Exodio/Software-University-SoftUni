function solve(input) {
    let number = Number(input.shift());
    let precisionOfNumber = Number(input.shift());

    if (precisionOfNumber > 15) {
        precisionOfNumber = 15;
    }
    number = number.toFixed(precisionOfNumber);
    console.log(parseFloat(number));
}
solve([3.1415926535897932384626433832795, 2]);