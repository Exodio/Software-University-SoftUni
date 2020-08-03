function nikuldensMeals(input) {

    let inputLine = input.shift();

    let likedMealsObj = {};
    let unlikedMealsCount = 0;

    while (inputLine !== "Stop") {
        let [command, guest, meal] = inputLine.split("-");

        if (command === "Like") {
            if (!likedMealsObj[guest]) { //1 If the guest and their meal does not exist in the collection we add it to our records
                likedMealsObj[guest] = [meal];
            } else {
                if (!likedMealsObj[guest].includes(meal)) { //2 if the meal does not exist in our guest's list's meals we add it
                    likedMealsObj[guest].push(meal);
                }
            }
        } else if (command === "Unlike") {
            if (!likedMealsObj[guest]) { //1 if the guest does not exist in the records
                console.log(`${guest} is not at the party.`);
            } else {
                if (likedMealsObj[guest].includes(meal)) { //2 If the meal of the guest IS present in our records  && //3 if the meal of the given guest exists in the collection
                    let mealIndex = likedMealsObj[guest].indexOf(meal);
                    likedMealsObj[guest].splice(mealIndex, 1);

                    console.log(`${guest} doesn't like the ${meal}.`);
                    unlikedMealsCount++;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`); //2 If the meal of the guest is NOT present in the records
                }
            }
        }

        inputLine = input.shift();
    }

    let objectEntries = Object.entries(likedMealsObj);
    let sortedObjectEntries = objectEntries.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for (let kvp of sortedObjectEntries) {
        let eachGuest = kvp[0];
        let mealsCount = kvp[1];
        console.log(`${eachGuest}: ${mealsCount.join(", ")}`);
    }

    console.log(`Unliked meals: ${unlikedMealsCount}`);
}

nikuldensMeals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]);