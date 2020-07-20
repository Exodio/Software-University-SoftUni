function fitnessCard(input) {
    let budget = Number(input.shift());
    let gender = String(input.shift());
    let age = Number(input.shift());
    let sportsType = String(input.shift());

    let cardPrice = 0;

    if (gender === "m") {
        if (sportsType === "Gym") {
            cardPrice = 42;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Boxing") {
            cardPrice = 41;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Yoga") {
            cardPrice = 45;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Zumba") {
            cardPrice = 34;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Dance") {
            cardPrice = 51;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Pilates") {
            cardPrice = 39;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        }
    } else if (gender === "f") {
        if (sportsType === "Gym") {
            cardPrice = 35;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Boxing") {
            cardPrice = 37;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Yoga") {
            cardPrice = 42;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Zumba") {
            cardPrice = 31;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Dances") {
            cardPrice = 53;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        } else if (sportsType === "Pilates") {
            cardPrice = 37;
            if (age <= 19) {
                cardPrice = cardPrice * 0.80;
            }
        }

    }

    if (budget >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sportsType}.`)
    } else {
        let difference = cardPrice - budget;
        console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`)
    }

}
solve(["10",
    "m",
    "50",
    "Pilates"
]);