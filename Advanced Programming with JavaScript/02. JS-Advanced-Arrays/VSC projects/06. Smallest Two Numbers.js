function solve(input) {

    let resultArr = input.sort((a, b) => a - b).slice(0, 2);
    console.log(resultArr.join(" "));

}

solve([30, 15, 50, 5]);