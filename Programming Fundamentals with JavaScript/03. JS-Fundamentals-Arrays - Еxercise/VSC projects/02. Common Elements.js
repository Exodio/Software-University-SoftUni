function commonElements(firstArr, secondArr) {
    for (i = 0; i < firstArr.length; i++) {
        let matchInFirstArr = firstArr[i];

        for (j = 0; j < secondArr.length; j++) {
            let matchInSecondArr = secondArr[j];

            if (matchInFirstArr === matchInSecondArr) {
                console.log(matchInFirstArr);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);