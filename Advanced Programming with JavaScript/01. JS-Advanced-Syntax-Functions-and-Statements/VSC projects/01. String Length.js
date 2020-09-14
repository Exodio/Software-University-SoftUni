function solve(input1, input2, input3) {

    let firstInputLength = input1.length;
    let secondInputLength = input2.length;
    let thirdInputLength = input3.length;

    let sumOfLength = firstInputLength + secondInputLength + thirdInputLength;
    let averageLength = Math.floor(sumOfLength / 3);

    console.log(sumOfLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');