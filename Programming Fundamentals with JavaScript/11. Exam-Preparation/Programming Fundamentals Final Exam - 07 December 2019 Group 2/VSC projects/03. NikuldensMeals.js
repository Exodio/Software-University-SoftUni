function nikuldensMeals(input) {

    let likedMealsObj = {};
    let unlikedMealsCount = 0;

    for (let eachLine of input) {
        let command = eachLine.split("-");

        if (command[0] === "Stop") {
            break;
        }

        switch (command[0]) {
            case "Like":
                if (!likedMealsObj.hasOwnProperty(command[1])) { //1 If the guest and their meal does not exist in the collection we add it to our records
                    likedMealsObj[command[1]] = {
                        meal: [command[2]],
                    }
                } else {
                    if (!likedMealsObj[command[1]].meal.includes(command[2])) { //2 if the meal does not exist in our guest's list's meals we add it
                        likedMealsObj[command[1]].meal.push(`${command[2]}`);
                    }
                } //if the guest alredy has the meal we don't do anything
                break;

            case "Unlike":
                if (likedMealsObj.hasOwnProperty(command[1])) { //1 we check if the guest exists in the records

                    if (!likedMealsObj[command[1]].meal == 0) { //2 If the meal of the guest IS present in our records 

                        if (likedMealsObj[command[1]].meal.includes(command[2])) { //3 if the meal of the given guest exists in the collection
                            let index = likedMealsObj[command[1]].meal.indexOf(command[1]);
                            likedMealsObj[command[1]].meal.splice(index, 1);

                            console.log(`${command[1]} doesn't like the ${command[2]}.`);
                            unlikedMealsCount++;
                        } else {
                            console.log(`${command[1]} doesn't have the ${command[2]} in his/her collection.`)
                        }
                    } else { //2 If the meal of the guest is NOT present in the records
                        console.log(`${command[1]} doesn't have the ${command[2]} in his/her collection.`)
                    }
                } else { //1 if the guest does not exist in the records
                    console.log(`${command[1]} is not at the party.`)
                }
                break;
        }
    }

    let keyEntries = Object.keys(likedMealsObj);
    let sortedKeyEntries = keyEntries.sort((a, b) => likedMealsObj[b].meal.length - likedMealsObj[a].meal.length || a.localeCompare(b));
    sortedKeyEntries.forEach((kvp) => {
        let output = [];

        for (let i = 0; i < likedMealsObj[kvp].meal.length; i++) {
            output.push(`${likedMealsObj[kvp].meal[i]}`);
        }
        console.log(`${kvp}: ${output.join(", ")}`);
    });

    console.log(`Unliked meals: ${unlikedMealsCount}`);
}

nikuldensMeals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]);