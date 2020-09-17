// function solve(input) {

//     let arr = input.slice();

//     if (arr.length > 1) {
//         let firstElement = Number(arr.shift());
//         let lastElement = Number(arr.pop());
//         console.log(firstElement + lastElement);

//     } else {
//         let singleElement = Number(arr.shift());
//         console.log(singleElement + singleElement);
//     }
// }

function solve(input) {
    let firstElement = input[0];
    let lastElement = input[input.length - 1];
    let result = Number(firstElement) + Number(lastElement);

    console.log(result);
}

solve(['20', '30', '40']);