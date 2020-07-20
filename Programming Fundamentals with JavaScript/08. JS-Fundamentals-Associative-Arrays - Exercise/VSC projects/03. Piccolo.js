function solve(input) {

    let parkingLot = [];

    for (const command of input) {
        let [direction, carNumber] = command.split(", ");

        if (direction === "IN" && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction === "OUT" && parkingLot.includes(carNumber)) {
            parkingLot = parkingLot.filter((carNumCheck) => carNumCheck !== carNumber); //Removes the input from the arr if found
        }
    }

    
    if (parkingLot.length > 0) {
        let sortedCarNumbers = parkingLot.sort((a, b) => a.localeCompare(b));
        console.log(sortedCarNumbers.join("\n"));
    } else {
        console.log("Parking Lot is Empty");
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);