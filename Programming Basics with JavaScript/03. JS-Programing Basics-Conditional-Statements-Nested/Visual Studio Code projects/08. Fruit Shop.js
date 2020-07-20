function fruitShop(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array
    let fruitType = String(input.shift());
    let dayOfWeek = String(input.shift());
    let amount = Number(input.shift());

    let sum = 0;

    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        if (fruitType === "banana") {
            sum = amount * 2.50;
            console.log(sum.toFixed(2));

        } else if (fruitType === "apple") {
            sum = amount * 1.20;
            console.log(sum.toFixed(2));

        } else if (fruitType === "orange") {
            sum = amount * 0.85;
            console.log(sum.toFixed(2));

        } else if (fruitType === "grapefruit") {
            sum = amount * 1.45;
            console.log(sum.toFixed(2));

        } else if (fruitType === "kiwi") {
            sum = amount * 2.70;
            console.log(sum.toFixed(2));

        } else if (fruitType === "pineapple") {
            sum = amount * 5.50;
            console.log(sum.toFixed(2));

        } else if (fruitType === "grapes") {
            sum = amount * 3.85;
            console.log(sum.toFixed(2));
        } else {
            console.log("error");
            return;

        }
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        if (fruitType === "banana") {
            sum = amount * 2.70;
            console.log(sum.toFixed(2));

        } else if (fruitType === "apple") {
            sum = amount * 1.25;
            console.log(sum.toFixed(2));

        } else if (fruitType === "orange") {
            sum = amount * 0.90;
            console.log(sum.toFixed(2));

        } else if (fruitType === "grapefruit") {
            sum = amount * 1.60;
            console.log(sum.toFixed(2));

        } else if (fruitType === "kiwi") {
            sum = amount * 3.00;
            console.log(sum.toFixed(2));

        } else if (fruitType === "pineapple") {
            sum = amount * 5.60;
            console.log(sum.toFixed(2));

        } else if (fruitType === "grapes") {
            sum = amount * 4.20;
            console.log(sum.toFixed(2));

        } else {
            console.log("error");
            return;
            console.log(sum.toFixed(2));

        }

    } else {
        console.log("error");
        return;
    }

}

fruitShop(["adi",
    "Saturday",
    "0.5"
]);