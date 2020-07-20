function YardGreening(input) {
    let projectGreeningSize = Number(input.shift());

    let singleSize = projectGreeningSize * 7.61;

    let disscount = 0.18 * singleSize;

    let finalSum = singleSize - disscount;


    console.log(finalSum.toFixed(2));
}

YardGreening(["540"]);