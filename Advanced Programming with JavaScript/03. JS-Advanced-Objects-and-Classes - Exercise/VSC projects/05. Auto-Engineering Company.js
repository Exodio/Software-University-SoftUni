function solve(input) {

    carsObj = {};

    input.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(" | ");

        if (!carsObj.hasOwnProperty(carBrand)) {
            carsObj[carBrand] = {};
        }

        if (!carsObj[carBrand].hasOwnProperty(carModel)) {
            carsObj[carBrand][carModel] = Number(producedCars);
        } else {
            carsObj[carBrand][carModel] += Number(producedCars);
        }
    });

    let result = Object.entries(carsObj);
    for (const eachBrand of result) {
        let brand = eachBrand[0];
        console.log(brand);

        for (const eachModel in eachBrand[1]) {
            let quantity = eachBrand[1];
            console.log(`###${eachModel} -> ${quantity[eachModel]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);