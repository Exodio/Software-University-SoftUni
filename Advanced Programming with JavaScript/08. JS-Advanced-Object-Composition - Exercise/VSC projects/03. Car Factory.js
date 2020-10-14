function solve(orderInput) {

    engineSizes = [{
            power: 90,
            volume: 1800,
        },
        {
            power: 120,
            volume: 2400,
        },
        {
            power: 200,
            volume: 3500,
        },
    ];

    return {
        model: orderInput.model,
        engine: engineSizes.find(engine => orderInput.power <= engine.power),
        carriage: {
            type: orderInput.carriage,
            color: orderInput.color,
        },
        wheels: Array(4).fill(orderInput.wheelsize % 2 === 0 ? orderInput.wheelsize - 1 : orderInput.wheelsize),
    };
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
}));