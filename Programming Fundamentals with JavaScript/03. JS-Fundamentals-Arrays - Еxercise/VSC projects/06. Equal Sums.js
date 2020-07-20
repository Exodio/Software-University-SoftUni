function equalSums(arrInput) {
    let conditionCheckResult = "no";

    for (let i = 0; i < arrInput.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            let nextLeftElement;
            nextLeftElement = arrInput[j];
            leftSum += nextLeftElement;
        }
        for (let k = i + 1; k < arrInput.length; k++) {
            let nextRightElement;
            nextRightElement = arrInput[k];
            rightSum += nextRightElement;
        }

        if (leftSum === rightSum) {
            conditionCheckResult = i;
            break;
        }
    }
    console.log(conditionCheckResult);

}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);