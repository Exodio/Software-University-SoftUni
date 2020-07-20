function solve(input) {

    let arrInput = input.split(" ");

    let wordsObj = {
        next: function () {
            let isFinished = arrInput.length === 0;
            let currentWord = arrInput.shift();

            return {
                value: currentWord,
                finish: isFinished,
            }
        }
    }
    let nextElement = wordsObj.next();

    while (!nextElement.finish) {
        console.log(nextElement.value);

        nextElement = wordsObj.next();
    }
}

solve("Et cillum do voluptate cillum ut cupidatat aliqua.");