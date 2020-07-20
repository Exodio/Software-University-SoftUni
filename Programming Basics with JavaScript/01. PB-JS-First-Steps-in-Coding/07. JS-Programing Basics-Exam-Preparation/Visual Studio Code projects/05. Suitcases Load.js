function solve(input) {
    let trunkCapacity = Number(input.shift());


    let currentCapacity = trunkCapacity;
    let lugagesCounter = 0;
    let totalVolumeLeft = 0;

    let commandCheck = String(input.shift());
    while (commandCheck !== "End") {
        let newLuggage = Number(commandCheck);

        lugagesCounter++;

        if (currentCapacity < newLuggage) {
            break;
        }

        if (lugagesCounter === 1) {
            currentCapacity -= newLuggage;
            totalVolumeLeft += currentCapacity;
            currentCapacity = totalVolumeLeft;

        } else if (lugagesCounter === 3) {
            totalVolumeLeft -= (newLuggage * 1.10);
        } else {
            if (totalVolumeLeft < newLuggage) {
                lugagesCounter -= 1;
                break;
            }

            totalVolumeLeft -= newLuggage;
        }


        commandCheck = input.shift();

    }
    if (commandCheck === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${lugagesCounter} suitcases loaded.`);
    } else {
        console.log(`No more space!`);
        console.log(`Statistic: ${Math.round(lugagesCounter)} suitcases loaded.`);
    }

}
solve(["550",
    "100",
    "252",
    "72",
    "End",
]);