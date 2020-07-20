function oddAndEvenValues(arrOfNumbers) {
    let numbers = arrOfNumbers;
    let initialArrSum = 0;
    let modifiedArrSum = 0;

    let sum = [];

    for (i = 0; i <= numbers.length - 1; i++) {
        initialArrSum += numbers[i];
    }
    for (i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            numbers[i] += i; // sum+= (numbers[i] += i) + " ";
            sum.push(numbers[i]);

        } else {
            numbers[i] -= i; //sum+= (numbers[i] -= i) + " ";
            sum.push(numbers[i]);
        }
        modifiedArrSum += numbers[i];
    }
    console.log(sum);
    console.log(initialArrSum);
    console.log(modifiedArrSum);

}
oddAndEvenValues([-5, 11, 3, 0, 2]);
//oddAndEvenValues([5, 15, 23, 56, 35]);