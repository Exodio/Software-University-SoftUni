function smallestNumberCheck(firstNum, secondNum, thirdNum) {
    let smallestResult = "";

    if (firstNum < secondNum && firstNum < thirdNum && firstNum != 0) {
        smallestResult = firstNum;
        return smallestResult;
    } else if (firstNum > secondNum && secondNum < thirdNum && secondNum != 0) {
        smallestResult = secondNum;
        return smallestResult;
    } else if (firstNum > thirdNum && secondNum > thirdNum && secondNum != 0) {
        smallestResult = thirdNum;
        return smallestResult;
    }
}
let resultOutput = smallestNumberCheck(600,
    342,
    123
);
console.log(resultOutput);

// function smallestNumberCheck(firstNum, secondNum, thirdNum) {
//     if (firstNum < secondNum && firstNum < thirdNum) {
//         console.log(firstNum);
//     } else if (secondNum < thirdNum) {
//         console.log(secondNum);
//     } else {
//         console.log(thirdNum);
//     }
// }
// smallestNumberCheck(600,
//     342,
//     123
// );