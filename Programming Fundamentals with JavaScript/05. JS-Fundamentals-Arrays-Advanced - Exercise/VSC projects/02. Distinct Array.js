function solve(arrInput) {
    let result = [];

    for (let eachElement of arrInput) {

        if (!result.includes(eachElement)) {
            result.push(eachElement);
        }
    }

    console.log(result.join(" "));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);