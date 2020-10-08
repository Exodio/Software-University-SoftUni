function solution() {

    let text = "";

    return {
        append: (string) => text += string,
        removeStart: (firstValue) => text = text.substring(firstValue),
        removeEnd: (lastValue) => text = text.substring(0, text.length - lastValue),
        print: () => console.log(text),
    }
}

//input
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);

//output
//loa