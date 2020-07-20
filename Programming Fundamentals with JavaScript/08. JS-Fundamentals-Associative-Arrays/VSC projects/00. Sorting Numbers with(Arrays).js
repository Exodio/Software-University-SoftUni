let arr1 = [10, 9, 6, 2, 4, 3, 2, 1, 1];
let arr2 = [10, 9, 6, 2, 4, 3, 2, 1, 1];

arr1.sort((a, b) => {
    let result = a - b;
    if (result < 0) { // a - b < 0 -> b > a
        return -1;
    } else if (result > 0) { // a - b > 0 -> a > b
        return 1;
    } else { // a - b = 0 -> a === b
        return 0;
    }
});
console.log(arr1)

arr2.sort((a, b) => a - b);
console.log(arr2);