function orders(input1, input2) {
    let productType = input1;
    let productQuantity = input2;
    let result = "";

    if (productType === "coffee") {
        result = (productQuantity * 1.50).toFixed(2);
    } else if (productType === "water") {
        result = (productQuantity * 1.00).toFixed(2);
    } else if (productType === "coke") {
        result = (productQuantity * 1.40).toFixed(2);
    } else if (productType === "snacks") {
        result = (productQuantity * 2.00).toFixed(2);
    }
    return result;

}
let resultOutput = orders("water", 5);
console.log(resultOutput);