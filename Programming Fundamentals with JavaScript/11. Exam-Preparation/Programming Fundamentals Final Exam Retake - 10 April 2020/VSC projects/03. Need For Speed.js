function needForSpeed(input) {
    let numberOfCars = Number(input.shift());

    let carsObj = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [name, mileage, fuel] = input.split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);

        carsObj[name] = {
            mileage,
            fuel,
        };
    }

    let commandLine = input.shift();
    while (commandLine !== "Stop") {
        let [command, carName, firstArgument, secondArgument] = commandLine.split(" : ");

        switch (command) {
            case "Drive":
                let distance = Number(firstArgument); //trip distance
                let fuelNeeded = Number(secondArgument); //fuel needed for trip

                if (carsObj[carName].fuel >= fuelNeeded) { //if we have the needed fuel amount for the trip
                    carsObj[carName].mileage += distance; //we increase our car's mileage, depending on the given distance we drove
                    carsObj[carName].fuel -= fuelNeeded; //we remove the total fuel once we drove
                    console.log(`${carName} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                    if (carsObj[carName].mileage >= 100000) {
                        delete carsObj[carName];
                        console.log(`Time to sell the ${carName}!`);
                    }

                } else { // if the fuel is not enough 
                    console.log(`Not enough fuel to make that ride!`);
                }
                break;

            case "Refuel":
                let fuelAmount = Number(firstArgument);
                let currentFuel = carsObj[carName].fuel;

                if (currentFuel + fuelAmount > 75) {
                    carsObj[carName].fuel = 75;
                    console.log(`${carName} refueled with ${75 - currentFuel} liters`);
                } else {
                    carsObj[carName].fuel += fuelAmount;
                    console.log(`${carName} refueled with ${fuelAmount} liters`);
                }
                break;

            case "Revert":
                let kilometers = Number(firstArgument);

                if (carsObj[carName].mileage < 10000) {
                    carsObj[carName].mileage = 10000;
                } else {
                    carsObj[carName].mileage -= kilometers;
                    console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
                };
                break;
        }

        commandLine = input.shift();
    }

    let carsObjEntries = Object.entries(carsObj);
    let sortedCarEntries = carsObjEntries.sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]));

    for (const kvp of sortedCarEntries) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);