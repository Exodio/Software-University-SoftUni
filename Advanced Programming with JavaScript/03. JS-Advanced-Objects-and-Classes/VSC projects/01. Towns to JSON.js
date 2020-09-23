// function solve(input) {

//     let inputFactors = input.shift();
//     let regexPattern = /\s*\|\s*/g;
//     let arrResult = [];

//     for (const element of input) {
//         let tokens = element.split(regexPattern);
//         tokens[2] = Number(tokens[2]);
//         tokens[3] = Number(tokens[3]);
//         let obj = {
//             Town: tokens[1],
//             Latitude: (tokens[2]).toFixed(2),
//             Longitude: (tokens[3]).toFixed(2),
//         };

//         arrResult.push(obj);
//     }

//     console.log(JSON.stringify(arrResult));
// }




// function solve(input) {

//     let arrResult = [];

//     for (let eachElement of input.slice(1)) {
//         let tokens = eachElement.split(/\s*\|\s*/);
//         let obj = {
//             Town: tokens[1],
//             Latitude: Number(tokens[2]),
//             Longitude: Number(tokens[3]),
//         };

//         arrResult.push(obj);
//     }
//     console.log(JSON.stringify(arrResult));;
// }

function solve(input) {
    
    let inputArr = input.shift();
    inputArr = inputArr.substring(2, inputArr.length - 2).split(" | ");

    let arrResult = [];

    input = input.map((eachLine) => {
        let obj = {};
        let keys = eachLine.substring(2, eachLine.length - 2).split(" | ");

        for (let i = 0; i < inputArr.length; i++) {
            obj[inputArr[i]] = isNaN(keys[i]) ? keys[i] : Number(Number(keys[i]).toFixed(2));
        }

        arrResult.push(obj);
    });

    console.log(JSON.stringify(arrResult));
};

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);