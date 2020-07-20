function arrRotation(arrInput, rotationsInput) {

    let neededRotations = rotationsInput % arrInput.length;
    let resultArr = [];

    for (let index in arrInput) {
        if (index >= neededRotations) {
            let element = arrInput[index];
            resultArr.push(element);
        }
    }
    for (let index in arrInput) {
        if (index < neededRotations) {
            let element = arrInput[index];
            resultArr.push(element);
        } else {
            break;
        }
    }
    console.log(resultArr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 2);