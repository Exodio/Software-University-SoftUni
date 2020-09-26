// function solve(input) {

//     let parsedInput = input.reduce((acc, product) => {
//         let [productName, productPrice] = product.split(" : ");

//         if (acc[productName[0]]) {
//             acc[productName[0]] = [...acc[productName[0]], product];
//         } else {
//             acc[productName[0]] = [product];
//         }

//         return acc;
//     }, {});

//     Object.keys(parsedInput).sort().map(initial => {
//         console.log(initial);

//         parsedInput[initial].sort().map(price => {
//             console.log(`  ${price.split(" : ").join(": ")}`);
//         });
//     });
// }

// function solve(input) {

//     let result = {};

//     input.forEach(line => {
//         let [name, price] = line.split(" : ");
//         let firstLetter = name[0];
//         price = Number(price);

//         if (!result[firstLetter]) {
//             result[firstLetter] = [];
//         }

//         let productsObj = {
//             name,
//             price,
//         };

//         result[firstLetter].push(productsObj);
//     });


//     const letterSorting = Object.entries(result).sort((currentLetter, nextLetter) => currentLetter[0].localeCompare(nextLetter[0]));

//     for (const element in letterSorting) {
//         console.log(letterSorting[element][0]);

//         const nameSorting = letterSorting[element][1].sort((current, next) => current.name.localeCompare(next.name));
//         nameSorting.forEach(productKey => {
//             console.log(`  ${productKey.name} : ${productKey.price}`);
//         })
//     }
// }


function solve(input) {

    let catalogieObj = {};
    let firstLetter = "";

    input.forEach(line => {
        let [productName, price] = line.split(" : ");
        catalogieObj[productName] = Number(price);
    });

    let sortedCatalogueObj = Object.keys(catalogieObj).sort((a, b) => a.localeCompare(b));

    for (const eachProduct of sortedCatalogueObj) {

        if (firstLetter !== eachProduct[0]) {
            firstLetter = eachProduct[0];

            console.log(letter);
        }
        console.log(`${eachProduct}: ${catalogieObj[eachProduct]}`);
    }
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