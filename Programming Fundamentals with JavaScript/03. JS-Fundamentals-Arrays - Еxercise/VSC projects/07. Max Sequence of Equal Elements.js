function maxSeqOfEqualEl(arr) {
    let arrInput = arr;
    let bestSequence = [];

    for (let i = 0; i < arrInput.length; i++) {
        let currentElement = arrInput[i];
        let currentSeqence = [currentElement];

        for (let j = i + 1; i < arrInput.length; j++) {
            let nextElement = arrInput[j];

            if (currentElement === nextElement) {
                currentSeqence.push(nextElement);
                i = j;
            } else {
                break;
            }
        }
        if (currentSeqence.length > bestSequence.length) {
            bestSequence = currentSeqence;
        }
    }
    console.log(bestSequence.join(' '))

}
maxSeqOfEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);