function smallShop(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array

    let productType = String(input.shift());
    let town = String(input.shift());
    let amount = Number(input.shift());

    let price = 0;

    if (town === "Sofia") {
        if (productType === "coffee") {
            price += amount * 0.50;

        } else if (productType === "water") {
            price += amount * 0.80;

        } else if (productType === "beer") {
            price += amount * 1.20;

        } else if (productType === "sweets") {
            price += amount * 1.45;

        } else if (productType === "peanuts") {
            price += amount * 1.60;
        }
    } else if (town === "Plovdiv") {
        if (productType === "coffee") {
            price += amount * 0.40;

        } else if (productType === "water") {
            price += amount * 0.70;

        } else if (productType === "beer") {
            price += amount * 1.15;

        } else if (productType === "sweets") {
            price += amount * 1.30;

        } else if (productType === "peanuts") {
            price += amount * 1.50;
        }
    } else if (town === "Varna") {
        if (productType === "coffee") {
            price += amount * 0.45;

        } else if (productType === "water") {
            price += amount * 0.70;

        } else if (productType === "beer") {
            price += amount * 1.10;

        } else if (productType === "sweets") {
            price += amount * 1.35;

        } else if (productType === "peanuts") {
            price += amount * 1.55;

        }
    }

    console.log(price);
}
smallShop(["coffee",
    "Varna",
    "2"
]);