function solve(firstNumber, secondNumber, thirdNumber) {

    let steps = firstNumber;
    let meters = secondNumber;
    let speed = thirdNumber;

    let totalDistance = steps * meters;
    let totalRest = Math.floor(totalDistance / 500);
    let timeTotal = ((totalDistance / speed) / 1000) * 60;
    let result = Math.ceil((timeTotal + totalRest) * 60);

    let dateResult = new Date(null, null, null, null, null, result);
    let output = dateResult.toTimeString().split(" ");

    console.log(output[0]);
}

solve(4000, 0.60, 5);