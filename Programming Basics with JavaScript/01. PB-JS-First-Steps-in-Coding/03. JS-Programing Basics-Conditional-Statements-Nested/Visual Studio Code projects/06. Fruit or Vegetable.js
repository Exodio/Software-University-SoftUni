function fruitOrVeggie(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array
    let productType = String(input.shift());


    if (productType === "banana" || productType === "apple" || productType === "kiwi" || productType === "cherry" || productType === "lemon" || productType === "grapes") {
        console.log("fruit");
    } else if (productType === "tomato" || productType === "cucumber" || productType === "pepper" || productType === "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
fruitOrVeggie(["banana"]);