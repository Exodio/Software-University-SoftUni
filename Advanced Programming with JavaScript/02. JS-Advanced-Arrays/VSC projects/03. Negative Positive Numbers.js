function solve(input) {

    let newArr = [];

    input.forEach((element) => {
        if (element >= 0) {
            newArr.push(element);
        } else {
            newArr.unshift(element);
        }
    });

    console.log(newArr.join("\n"));
}

solve([3, -2, 0, -1]);