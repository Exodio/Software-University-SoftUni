function solve(input) {

    let obj = {};

    input.forEach((eachLine) => {
        let [town, product, price] = eachLine.split(" | ");

        if (!obj[product]) {
            obj[product] = {};
        }

        obj[product][town] = Number(price);
    });

    let entries = Object.entries(obj);
    entries.forEach(([productName, townNames]) => {
        let [townName, productPrice] = Object.entries(townNames).sort((a, b) => a[1] - b[1])[0];
        console.log(`${productName} -> ${productPrice} (${townName})`);
    });
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);