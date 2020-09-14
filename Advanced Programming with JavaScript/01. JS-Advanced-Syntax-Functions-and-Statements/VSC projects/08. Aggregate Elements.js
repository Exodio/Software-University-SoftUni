function solve(input) {

    let sumInput = 0;
    let sumInverseInput = 0;
    let concatInput = "";

    for (const element of input) {
        sumInput += element;
        sumInverseInput += 1 / element;
        concatInput += String(element);
    }

    console.log(sumInput);
    console.log(sumInverseInput);
    console.log(concatInput);

}

solve([2, 4, 8, 16]);