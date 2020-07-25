function solve(input) {

    let boughtFurnitures = [];
    let totalPrice = 0;

    for (const eachLine of input) {
        let regExp = />>(?<furnitureName>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/g.exec(eachLine);

        if (regExp) { //Matches
            boughtFurnitures.push(regExp.groups.furnitureName);
            totalPrice += Number(regExp.groups.price) * Number(regExp.groups.quantity);
        }
    }

    
    console.log("Bought furniture:");
    if (boughtFurnitures.length > 0) {
        console.log(boughtFurnitures.join("\n"));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase",
]);