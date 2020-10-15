// function solve(orderInput) { //v1

//     engineSizes = [{
//             power: 90,
//             volume: 1800,
//         },
//         {
//             power: 120,
//             volume: 2400,
//         },
//         {
//             power: 200,
//             volume: 3500,
//         },
//     ];

//     return {
//         model: orderInput.model,
//         engine: engineSizes.find(engine => orderInput.power <= engine.power),
//         carriage: {
//             type: orderInput.carriage,
//             color: orderInput.color,
//         },
//         wheels: Array(4).fill(orderInput.wheelsize % 2 === 0 ? orderInput.wheelsize - 1 : orderInput.wheelsize),
//     };
// }

//input
// console.log(solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14,
// }));

// function solve(orderInput) { //v2

//     let {
//         model,
//         power,
//         color,
//         carriage,
//         wheelsize,
//     } = orderInput;

//     let engineSizes;

//     if (power <= 90) {
//         engineSizes = {
//             power: 90,
//             volume: 1800,
//         };
//     } else if (power <= 120) {
//         engineSizes = {
//             power: 120,
//             volume: 2400,
//         };
//     } else if (power <= 200) { // or use just else
//         engineSizes = {
//             power: 200,
//             volume: 3500,
//         };
//     }

//     let carriageInfo = {
//         type: carriage,
//         color: color,
//     };

//     let wheelSize = wheelsize % 2 === 0 ? --wheelsize : wheelsize;
//     let wheelsInfo = [wheelSize, wheelSize, wheelSize, wheelSize]; //or use [4].fill(wheelSize, 0, wheelSize.length);

//     let result = {
//         model,
//         engine,
//         carriage: carriageInfo,
//         wheels: wheelsInfo,
//     };

//     return {
//         result,
//     };

//     //console.log();
// }

solve = ({ //v3
    model,
    power,
    color,
    carriage,
    wheelsize,
}) => {

    const engineSizes = [{
        power: 90,
        volume: 1800,
    }, {
        power: 120,
        volume: 2400,
    }, {
        power: 200,
        volume: 3500,
    }];

    let carriageInfo = {
        type: carriage,
        color: color,
    };

    let wheelSize = wheelsize % 2 === 0 ? --wheelsize : wheelsize;
    let wheelsInfo = [0, 0, 0, 0];

    return {
        model,
        engine: engineSizes.find(engine => engine.power >= power),
        carriage: {
            type: carriageInfo,
            color,
        },
        wheels: wheelsInfo.fill(wheelSize),
    };
}

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});