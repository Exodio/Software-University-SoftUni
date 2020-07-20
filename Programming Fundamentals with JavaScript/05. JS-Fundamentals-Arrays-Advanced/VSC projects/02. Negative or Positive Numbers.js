function solve(arrOfNumbers) {
    let elementsOfArr = [];

    while (arrOfNumbers.length > 0) {
        let currentElement = arrOfNumbers.shift();

        if (currentElement < 0) {
            elementsOfArr.unshift(currentElement);
        } else {
            elementsOfArr.push(currentElement);
        }
    }
    for (let i = 0; i <= elementsOfArr.length - 1; i++) {
        console.log(elementsOfArr[i]);
    }

}
solve([7, -2, 8, 9]);