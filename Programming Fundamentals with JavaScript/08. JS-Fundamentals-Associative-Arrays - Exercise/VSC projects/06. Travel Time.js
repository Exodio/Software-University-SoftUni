function solve(input) {

    let travelList = {};
    let result = "";

    for (const travelInfo of input) {
        let [country, town, cost] = travelInfo.split("> ");

        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = [];
        }

        let currentTown = travelList[country].find((o) =>
            o.town === town);

        if (!currentTown) {
            travelList[country].push({
                town,
                cost,
            });
        } else if (cost < currentTown.cost) {
            currentTown.cost = cost;
        }
    }

    let output = Object.keys(travelList).sort((a, b) => a.localeCompare(b))
        .forEach((country) => {
            result += (`${country}-> `);

            travelList[country].sort((a, b) => a.cost - b.cost)
                .forEach((o) => result += `${o.town}-> ${o.cost} `);

            result += "\n";
        });


    console.log(result);
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);