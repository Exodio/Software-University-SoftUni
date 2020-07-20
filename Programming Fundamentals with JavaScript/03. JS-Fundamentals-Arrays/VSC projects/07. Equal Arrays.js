function solve(firstArrString, secondArrString) {
    let elementOfFirstArr = 0;
    let elementOfSecondArr = 0;

    let sumOfEqualArrs = 0;
    let differenceInIndex = 0;
    let arrsEqual = true;

    for (let i = 0; i < firstArrString.length; i++) {
        elementOfFirstArr = Number(firstArrString[i]);
        elementOfSecondArr = Number(secondArrString[i]);
        sumOfEqualArrs += elementOfFirstArr;

        if (elementOfFirstArr !== elementOfSecondArr) {
            differenceInIndex = i;
            arrsEqual = false;
            break;
        }
    }
    if (arrsEqual) {
        console.log(`Arrays are identical. Sum: ${sumOfEqualArrs}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differenceInIndex} index`);
    }
    
}
solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
// function arrStringComparison(firstStringArr, secondStringArr) { //Will skip the check, if there is a 1 index difference 
//     let firstArrSum = 0;

//     for (let i = 0; i < firstStringArr.length; i++) {
//         firstStringArr[i] = Number(firstStringArr[i]);
//         firstArrSum += firstStringArr[i];
//     }
//     for (let i = 0; i < secondStringArr.length; i++) {
//         secondStringArr[i] = Number(secondStringArr[i]);
//     }

//     for (let i = 0; i < firstStringArr.length; i++) {
//         if (firstStringArr[i] !== secondStringArr[i]) {
//             console.log(`Arrays are not identical. Found difference at ${i} index`);
//             return;
//         } else {
//             console.log(`Arrays are identical. Sum: ${firstArrSum}`);
//             return;
//         }
//     }

// }
// arrStringComparison(['1'], ['10']);