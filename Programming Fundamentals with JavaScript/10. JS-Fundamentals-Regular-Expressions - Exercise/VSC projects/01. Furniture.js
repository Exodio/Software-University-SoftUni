function solve(input) {

    console.log("Bought furniture:");

    let totalPrice = 0;

    for (const eachLine of input) {
        let regExp = />>(?<furnitureName>.+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
        let matchExec = regExp.exec(eachLine);

        if (matchExec) {
            let {
                furnitureName,
                price,
                quantity
            } = matchExec.groups;

            console.log(furnitureName);

            totalPrice += Number(price) * Number(quantity);
        }
    }


    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase",
]);