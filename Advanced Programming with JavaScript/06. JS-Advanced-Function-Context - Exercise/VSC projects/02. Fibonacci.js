// function getFibonator() {

//     let count = 0;

//     function fib(value) {

//         if (value <= 1) {
//             return 1;
//         }

//         return fib(value - 2) + fib(value - 1);
//     }

//     return function innerCheck() {
//         let result = fib(count);

//         count++;

//         return result;
//     }
// }

function getFibonator() {

    let currentNumber = 0;
    let nextNumber = 1;

    function fib() { //closure function
        let fibNumber = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = fibNumber;

        return currentNumber;
    }

    return fib;
}

//input + output
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13