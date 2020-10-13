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


// function solve(input) {

//     let allRectangles = ([width, height]) => {
//         let area = () => width * height;

//         return {
//             width,
//             height,
//             area,
//             compareTo: (otherRectangle) => otherRectangle.area() - area() || otherRectangle.width - width,
//         };
//     }
//     input = input.map(allRectangles);
//     input.sort((a, b) => a.compareTo(b));

//     return input;
// }

// function solve(input) {

//     let result = input.map(([width, height]) => { //first option
//         return {
//             width, //x[0], !if width === width -> width (if the names are the same js will make simplify it and asign a value to the property)
//             height, //x[1], !if width === width -> width (if the names are the same js will make simplify it and asign a value to the property)
//             area: function () {
//                 width * height
//             },
//             compareTo: function (rectangle) {
//                 let result = this.area() - rectangle.area();

//                 if (result === 0) {
//                     rectangle.width - this.width
//                 }
//                 result;
//             },
//         });
//         result.sort((a, b) => {
//            return b.compareTo(a);
//         });

//       return result; //console.log(result);
// }

function solve(input) {
    
    let result = input.map(([width, height]) => ({ //second option
        width,
        height,
        area: () => width * height,
        compareTo(rectangle) {
            let result = rectangle.area() - this.area(); //result = rectangle.area() - this.area() || rectangle.width - this.width;

            return result === 0    
            ? rectangle.width - this.width 
            : result;
        },

    })).sort((a, b) => a.compareTo(b));

    return result; //console.log(result);
}

solve([
    [10, 5],
    [5, 12],
]);