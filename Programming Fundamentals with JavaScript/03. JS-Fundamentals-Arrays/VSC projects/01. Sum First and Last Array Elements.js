function firstAndLastNumber(numbers) {
   let firstElement = Number(numbers[0]);
   let lastElement = Number(numbers[numbers.length - 1]);
   let elementSum = firstElement + lastElement;

   console.log(elementSum);

}
firstAndLastNumber(['20', '30', '40']);