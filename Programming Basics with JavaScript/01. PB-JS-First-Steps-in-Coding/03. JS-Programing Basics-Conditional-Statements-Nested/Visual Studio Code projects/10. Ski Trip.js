function skiTrip(input) {

    let days = Number(input.shift());
    let apartmentType = String(input.shift());
    let rate = String(input.shift());

    let roomForOnePerson = 18;
    let apartmentRoom = 25;
    let presidentRoom = 35;

    let nights = days - 1;
    let nightsSum = 0;
    let finalSum = 0;

    if (apartmentType === "room for one person") {
        if (days > 0 && days < 10) {
            nightsSum = nights * roomForOnePerson;

        } else if (days >= 10 && days <= 15) {
            nightsSum = nights * roomForOnePerson;

        } else if (days > 15) {
            nightsSum = nights * roomForOnePerson;

        }

    } else if (apartmentType === "apartment") {
        if (days > 0 && days < 10) {
            nightsSum = (nights * apartmentRoom) * 0.70;


        } else if (days >= 10 && days <= 15) {
            nightsSum = (nights * apartmentRoom) * 0.65;


        } else if (days > 15) {
            nightsSum = (nights * apartmentRoom) * 0.50;

        }

    } else if (apartmentType === "president apartment") {
        if (days > 0 && days < 10) {
            nightsSum = (nights * presidentRoom) * 0.90;

        } else if (days >= 10 && days <= 15) {
            nightsSum = (nights * presidentRoom) * 0.85;

        } else if (days > 15) {
            nightsSum = (nights * presidentRoom) * 0.80;

        }
    }
    if (rate === "positive") {
        finalSum = nightsSum * 1.25;

    } else if (rate === "negative") {
        finalSum = nightsSum * 0.90;

    }

    console.log(finalSum.toFixed(2));

}
skiTrip(["14",
    "apartment",
    "positive",
]);