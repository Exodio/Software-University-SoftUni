function solve(input) {

    let evenNumsArr = [];

    input.forEach((element, index) => {
        if (index % 2 === 0) {
            evenNumsArr.push(element);
        }
    });

    console.log(evenNumsArr.join(" "));
}

solve(['20', '30', '40']);