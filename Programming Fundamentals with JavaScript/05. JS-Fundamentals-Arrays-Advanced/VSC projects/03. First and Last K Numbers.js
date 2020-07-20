function solve(numbersArr) {
    let k = numbersArr.shift();
    let firstElement = numbersArr.slice([0], k);
    let lastElement = numbersArr.slice(numbersArr.length - k);


    let firstElementsResult = "";
    let lastElementsResult = "";

    for (i = 0; i <= k - 1; i++) {
        firstElementsResult += `${firstElement[i]} `;
        lastElementsResult += `${lastElement[i]} `;
    }

    console.log(firstElementsResult);
    console.log(lastElementsResult);
}
solve([
    2, 7, 8, 9
]);