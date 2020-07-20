function areaOfFigures(input) { //To run in judge we need to have place (...input) to indicate it as an array
    let figType = input.shift();

    if (figType === "square") {
        let sideA = Number(input.shift());
        let result = sideA * sideA;

        console.log(result.toFixed(3));
    } else if (figType === "rectangle") {
        let sideA = Number(input.shift());
        let sideB = Number(input.shift());

        let result = sideA * sideB;

        console.log(result.toFixed(3));
    } else if (figType === "circle") {
        let radius = Number(input.shift());
        let result = Math.pow(radius, 2) * Math.PI;

        console.log(result.toFixed(3));
    } else if (figType === "triangle") {
        let sideA = Number(input.shift());
        let sideB = Number(input.shift());

        let result = sideA * sideB / 2;

        console.log(result.toFixed(3));
    }
}
areaOfFigures([
    "circle",
    "6",
]);