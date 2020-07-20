function solve(productsArr) {
    let products = productsArr;
    products.sort((a, b) => a.localeCompare(b)).forEach((productType, i) => console.log(`${i + 1}.${productType}`)); //The productType will be the place where we will store our output and we supply it by for each element.(i) is the already declared index of the arrProducts, which we have and we can use it as a number infrom of the result output. And as expected the locate compare is used in case we have a lower letter name of product and we use it in order to not recive an unexpected output as each individual check is processed via the ASCII table
    //Be advised that judge may not let localeCompare, so if you receive an error in the checks just know!
}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);