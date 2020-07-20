function solve(input) {

    let destination = undefined;

    while (destination !== "End") {

        destination = input.shift();
        let minimalBudget = Number(input.shift());

        let savingsSum = 0;
        let savings = 0;

        while (minimalBudget > savingsSum) {

            savings = Number(input.shift());
            savingsSum += savings;

            if (savingsSum >= minimalBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
    }
}
solve(["Greece",
    1000,
    200,
    200,
    300,
    100,
    150,
    240,
    "Spain",
    1200,
    300,
    500,
    193,
    423,
    "End"
]);