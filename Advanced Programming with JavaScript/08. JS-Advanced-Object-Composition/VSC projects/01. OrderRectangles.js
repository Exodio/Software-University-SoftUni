// function solve(input) {

//     let allRectangles = [];

//     for (const element of input) {

//         let rectangle = {
//             width: element[0],
//             height: element[1],
//             area: () => rectangle.width * rectangle.height,
//             compareTo: function (otherRectangle) {
//                 if (this.area() > otherRectangle.area()) // Sorting in decending order
//                     return -1;
//                 if (this.area() < otherRectangle.area())
//                     return 1;
//                 if (this.width > otherRectangle.width)
//                     return -1;
//                 if (this.width < otherRectangle.width)
//                     return 1;
//                 return 0;
//             }
//         };

//         allRectangles.push(rectangle);
//     }

//     return allRectangles.sort((a, b) => a.compareTo(b));
// }


function solve(input) {

    let allRectangles = ([width, height]) => {
        let area = () => width * height;

        return {
            width,
            height,
            area,
            compareTo: (otherRectangle) => otherRectangle.area() - area() || otherRectangle.width - width,
        };
    }
    input = input.map(allRectangles);
    input.sort((a, b) => a.compareTo(b));

    return input;
}

console.log(solve([
    [10, 5],
    [5, 12]
]));