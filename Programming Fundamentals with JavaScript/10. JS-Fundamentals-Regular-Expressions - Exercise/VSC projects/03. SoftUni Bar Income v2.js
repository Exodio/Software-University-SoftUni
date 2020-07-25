function solve(input) {

    let totalIncome = 0;

    for (const eachOrder of input) {
        const regexPattern = /%(?<customer>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>[A-Za-z0-9_]+)>(?:[^\|\$%\.]+)?\|(?<count>[0-9]+)\|(?:[^\|\$%\.[0-9]+)?(?<price>[0-9]+\.?[0-9]+)\$/g;
        let matchExec = regexPattern.exec(eachOrder);

        if (matchExec) {
            let totalPrice = Number(matchExec.groups.price) * Number(matchExec.groups.count);
            totalIncome += totalPrice;

            console.log(`${matchExec.groups.customer}: ${matchExec.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }


    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
]);