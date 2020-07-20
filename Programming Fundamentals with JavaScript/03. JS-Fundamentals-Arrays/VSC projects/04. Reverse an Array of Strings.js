function revArrOfStrings(elementsInput) {
    let swappedArr = [];
    
    for (let i = 0; i < Math.ceil(elementsInput.length / 2); i++) {
        swappedArr[i] = elementsInput[elementsInput.length - 1 - i];
        swappedArr[elementsInput.length - 1 - i] = elementsInput[i];
    }
    console.log(swappedArr.join(" "));

}
revArrOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
// function revArrOfStrings(stringsArr) {   //Reversing each index of the array and reversing it's elements as well
//     // let stringArr = "";
//     // let result = "";

//     // for (let elements of stringsArr) {
//     //     stringArr += elements + " ";
//     // }
//     // for (let i = stringArr.length - 1; i >= 0; i--) {

//     //     result += `${stringArr[i]}`;
//     // }
//     // console.log(result);
// }
// revArrOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);