function SumOfDigits(number) {
    let numberToString = String(number);
    let sum = 0;
    for (let i = 0; i < numberToString.length; i++) {
        sum+= Number(numberToString[i]);
    }
    console.log(sum);
}
SumOfDigits(245678);