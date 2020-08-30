function solve(input) {

  let price = input.shift();
  let totalPrice = 0;
  let unlistedTaxes = 0;
  let listedTaxes = 0;

  while (price !== "special") {

    if (price === "regular") {
      break;
    }
    let partPrice = Number(price);

    if (partPrice > 0) {
      unlistedTaxes += partPrice;
      listedTaxes += partPrice * 0.2;
      partPrice = partPrice + (partPrice * 0.2);
      totalPrice += partPrice;
    } else {
      console.log("Invalid price!");
    }

    price = input.shift();
  }

  if (price === "special") {
    totalPrice = totalPrice * 0.9;
  }

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${unlistedTaxes.toFixed(2)}$
    Taxes: ${listedTaxes.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$`);
  }
}

solve(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
