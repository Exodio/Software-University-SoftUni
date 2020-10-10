// function solve(arr, arg) {

//     let sortedArr = sortArr();

//     function sortArr() {
//         return {
//             asc: (x) => x.sort((a, b) => a - b),
//             desc: (x) => x.sort((a, b) => b - a)
//         }
//     }

//     return sortedArr[arg](arr);
// }

function solve(arr, arg) {

    let sortFunction = {
        asc: function (arr) {
            return arr.sort((a, b) => a + b);
        },
        desc: function (arr) {
            return arr.sort((a, b) => b - a);
        }
    }

    let func = sortFunction[arg];
    return func(arr);
}

console.log(solve([14, 7, 17, 6, 8], 'asc')); //[6, 7, 8, 14, 17]