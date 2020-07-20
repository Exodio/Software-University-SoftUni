function reverseArray(n, arrInput) {
    let resultOfArr = [];
    let reveredResult = "";

    for (let i = 0; i < n; i++) {
        resultOfArr[i] = arrInput[i];
    }
    for (let i = n - 1; i >= 0; i--) {
        reveredResult += resultOfArr[i] + " ";
    }
    console.log(reveredResult);
    
}
reverseArray(3, [10, 20, 30, 40, 50]);