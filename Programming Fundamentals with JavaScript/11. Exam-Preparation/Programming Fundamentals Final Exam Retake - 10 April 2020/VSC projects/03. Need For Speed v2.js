function needForSpeed(input) {

    let carsNumberInput = input.shift();

    let carsObj = {};

    while (carsNumberInput > 0) {
        let [vehicle, mileageTotal, fuelLiters] = input.shift().split("|");
        mileageTotal = Number(mileageTotal);
        fuelLiters = Number(fuelLiters);

        carsObj[vehicle] = {
            mileage: mileageTotal,
            fuel: fuelLiters,
        };

        carsNumberInput--;
    }

    let commandLine = input.shift();

    while (commandLine !== "Stop") {
        let [command, car, argOne, argTwo] = commandLine.split(" : ");

        switch (command) {
            case "Drive":
                let distance = Number(argOne);
                let fuelNeeded = Number(argTwo);

                if (carsObj[car].fuel < fuelNeeded) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    carsObj[car].mileage += distance;
                    carsObj[car].fuel -= fuelNeeded;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                    if (carsObj[car].mileage >= 100000) {
                        delete carsObj[car];
                        console.log(`Time to sell the ${car}!`);
                    }
                }
                break;

            case "Refuel":
                let fuelAmount = Number(argOne);

                if (carsObj[car].fuel + fuelAmount > 75) {
                    console.log(`${car} refueled with ${75 - carsObj[car].fuel} liters`);
                    carsObj[car].fuel = 75;
                } else {
                    carsObj[car].fuel += fuelAmount;
                    console.log(`${car} refueled with ${fuelAmount} liters`);
                }
                break;

            case "Revert":
                let kilometersDecrease = Number(argOne);

                carsObj[car].mileage -= kilometersDecrease;
                if (carsObj[car].mileage < 10000) {
                    carsObj[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometersDecrease} kilometers`);
                }
                break;
        }

        commandLine = input.shift();
    }
    
    let entriesArr = Object.entries(carsObj);
    let sortedEntries = entriesArr.sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]));
    sortedEntries.forEach(kvp => {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    });
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