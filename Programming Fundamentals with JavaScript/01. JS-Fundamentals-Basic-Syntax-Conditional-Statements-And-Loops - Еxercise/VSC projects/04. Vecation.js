function solve(input) {
    let groupCount = Number(input.shift());
    let groupType = String(input.shift());
    let dayOfWeek = String(input.shift());

    let endPrice = 0;

    if (dayOfWeek === "Friday") {
        if (groupType === "Students") {
            if (groupCount >= 30) {
                endPrice = (8.45 * groupCount) * 0.85;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 8.45 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        } else if (groupType === "Business") {
            if (groupCount >= 100) {
                endPrice = 10.9 * (groupCount - 10);
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 10.9 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        } else if (groupType === "Regular") {
            if (groupCount >= 10 && groupCount <= 20) {
                endPrice = (15 * groupCount) * 0.95;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 15 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        }
    } else if (dayOfWeek === "Saturday") {
        if (groupType === "Students") {
            if (groupCount >= 30) {
                endPrice = (9.8 * groupCount) * 0.85;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 9.8 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        } else if (groupType === "Business") {
            if (groupCount >= 100) {
                endPrice = 15.6 * (groupCount - 10);
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 15.6 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        } else if (groupType === "Regular") {
            if (groupCount >= 20 && groupCount <= 20) {
                endPrice = (15 * groupCount) * 0.95;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 20 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        }
    } else if (dayOfWeek === "Sunday") {
        if (groupType === "Students") {
            if (groupCount >= 30) {
                endPrice = (10.46 * groupCount) * 0.85;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 10.46 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        } else if (groupType === "Business") {
            if (groupCount >= 100) {
                endPrice = 16 * (groupCount - 10);
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 16 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        } else if (groupType === "Regular") {
            if (groupCount >= 20 && groupCount <= 20) {
                endPrice = (22.50 * groupCount) * 0.95;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            } else {
                endPrice = 22.50 * groupCount;
                console.log(`Total price: ${endPrice.toFixed(2)}`);
            }
        }
    }
}
solve([40,
    "Regular",
    "Saturday"
]);