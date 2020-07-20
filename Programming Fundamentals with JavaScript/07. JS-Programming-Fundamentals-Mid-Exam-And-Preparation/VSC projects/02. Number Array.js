function solve(arr) {
    let numbers = arr.shift().split(" ").map(Number);

    for (let iterator of arr) {
        let [command, index, value] = iterator.split(" ");
        value = Number(value);

        if (command === "End") {
            break;
        }

        if (command === "Switch") {
            swich(+index);
        }

        if (command === "Change") {
            change(+index, value);
        }

        if (command === "Sum") {
            let currentNumbers = [];

            if (index === "Negative") {
                currentNumbers = numbers.filter(n => n < 0);
            } else if (index === "Positive") {
                currentNumbers = numbers.filter(n => n >= 0);
            } else if (index === "All") {
                currentNumbers = numbers.slice();
            }
            let sum = 0;

            for (let num of currentNumbers) {
                sum += num;
            }
            console.log(sum);

        }
    }
    console.log(numbers.filter(n => n >= 0).join(" "));

    function swich(index) {

        if (index >= 0 && index < numbers.length) {
            numbers[index] = -numbers[index];
        }
    }

    function change(index, value) {

        if (index >= 0 && index < numbers.length) {
            numbers[index] = value;
        }
    }
}
solve();