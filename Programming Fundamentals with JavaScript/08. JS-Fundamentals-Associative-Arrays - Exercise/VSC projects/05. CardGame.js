function solve(input) {

    let power = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    };
    let type = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    };
    let result = {};
    let peopleList = {};

    for (const element of input) {

        let [player, gameCards] = element.split(": ");
        let cards = gameCards.split(", ");

        if (!peopleList.hasOwnProperty(player)) {
            peopleList[player] = cards.toString();
        } else {
            let currentValue = cards + "," + peopleList[player];
            peopleList[player] = currentValue;
        }
    }

    for (let element in peopleList) {

        let sum = 0;
        let personName = element;
        let eachCard = peopleList[element].split(",");
        let cardSet = new Set(eachCard);
        let cardArray = Array.from(cardSet);

        for (let card of cardArray) {

            if (card.length === 2) {
                let [cardType, cardPower] = card.split("");
                sum += Number(power[cardType]) * Number(type[cardPower]);
            } else {
                let [cardType, otherCardType, cardPower] = card.split("");
                cardType += otherCardType;
                sum += Number(power[cardType]) * Number(type[cardPower]);
            }

        }

        if (!result.hasOwnProperty(personName)) {
            result[personName] = sum;
        } else {
            let currentSum = result[personName] + sum;
            result[personName] = currentSum;
        }

    }

    
    for (const kvp in result) {
        console.log(`${kvp}: ${result[kvp]}`);
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);