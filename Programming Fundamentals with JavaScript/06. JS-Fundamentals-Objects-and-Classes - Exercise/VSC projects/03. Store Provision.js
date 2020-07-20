function solve(stockProductArr, orderedProductArr) {
    let products = {};

    for (let i = 0; i < stockProductArr.length; i += 2) {

        if (i % 2 === 0) {
            let product = stockProductArr[i];
            let quantity = Number(stockProductArr[i + 1]);
            products[product] = quantity;
        }
    }

    for (let i = 0; i < orderedProductArr.length; i += 2) {
        let product = orderedProductArr[i];
        let quantity = Number(orderedProductArr[i + 1]);

        if (products[product] === undefined) {
            products[product] = 0;
        }
        products[product] += quantity;
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }

}
solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);