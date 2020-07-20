function solve(arrInput) {
    let numbers = arrInput;
    numbers.sort((a, b) => a - b);

    let result = numbers.slice(0, 2).join(" "); //Sort will take the original numbers arr and sort them by size, afterwards slice/take the first two digits and will join/add them by space
    console.log(result);
}
solve([30, 15, 50, 5]);