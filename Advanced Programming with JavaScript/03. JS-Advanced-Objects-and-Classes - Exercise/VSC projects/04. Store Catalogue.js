function solve(input) {

    let parsedInput = input.reduce((acc, product) => {
        let [productName, productPrice] = product.split(" : ");

        if (acc[productName[0]]) {
            acc[productName[0]] = [...acc[productName[0]], product];
        } else {
            acc[productName[0]] = [product];
        }

        return acc;
    }, {});

    Object.keys(parsedInput).sort().map(initial => {
        console.log(initial);

        parsedInput[initial].sort().map(price => {
            console.log(`  ${price.split(" : ").join(": ")}`);
        });
    });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);