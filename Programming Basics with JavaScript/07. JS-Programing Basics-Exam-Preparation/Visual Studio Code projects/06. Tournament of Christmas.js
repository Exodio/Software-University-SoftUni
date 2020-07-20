function solve(input) {
    let tournamentDays = Number(input.shift());
    let totalDays = tournamentDays;

    let winsCounter = 0;
    let losesCounter = 0;
    let winsCounterOfPastDay = 0;
    let losesCounterOfPastDay = 0;


    let charityAmount = 0;
    let winnersOfTheDayBonus = 0;
    let pastDaysTotal = 0;

    let commandCheck = String(input.shift());

    while (totalDays > 0) {
        while (commandCheck !== "Finish") {
            let sportType = String(commandCheck);
            let sportResult = String(input.shift());


            if (sportResult === "win") {
                winsCounter++;
                charityAmount += 20;

            } else if (sportResult === "lose") {
                losesCounter++;
            }

            commandCheck = input.shift();
        }

        if (commandCheck === "Finish" && winsCounter > losesCounter) {

            winnersOfTheDayBonus = charityAmount * 1.10;
            winsCounterOfPastDay += winsCounter;
            losesCounterOfPastDay += losesCounter;
            winsCounter = 0;
            losesCounter = 0;
            charityAmount = 0;
            pastDaysTotal += winnersOfTheDayBonus;
            totalDays--;

            commandCheck = input.shift();
        } else {
            pastDaysTotal += charityAmount;
            winsCounterOfPastDay += winsCounter;
            losesCounterOfPastDay += losesCounter;
            winsCounter = 0;
            losesCounter = 0;
            charityAmount = 0;
            totalDays--;

            commandCheck = input.shift();
        }
    }

    if (winsCounterOfPastDay > losesCounterOfPastDay) {
        console.log(`You won the tournament! Total raised money: ${((pastDaysTotal*= 1.20).toFixed(2))}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${(pastDaysTotal.toFixed(2))}`);
    }
}
solve(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish",
]);

// solve(["3",
//     "darts",
//     "lose",
//     "handball",
//     "lose",
//     "judo",
//     "win",
//     "Finish",
//     "snooker",
//     "lose",
//     "swimming",
//     "lose",
//     "squash",
//     "lose",
//     "table tennis",
//     "win",
//     "Finish",
//     "volleyball",
//     "win",
//     "basketball",
//     "win",
//     "Finish",
// ]);
