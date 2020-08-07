function heroRecruitment(input) {

    let textInput = input.shift();
    let heroCollectionObj = {};

    while (textInput !== "End") {
        let [command, heroName, spellName] = textInput.split(" ");

        switch (command) {
            case "Enroll":

                if (!heroCollectionObj[heroName]) {
                    heroCollectionObj[heroName] = []; //We create a new object with an array inside, because we will hold string kvp's only and it will be easier for the end result
                } else {
                    console.log(`${heroName} is already enrolled.`);
                }
                break;
            case "Learn":
                if (!heroCollectionObj[heroName]) {
                    console.log(`${heroName} doesn't exist.`);
                } else {
                    if (heroCollectionObj[heroName].includes(spellName)) { //We check if we have an arr in the object list of the listed spell
                        console.log(`${heroName} has already learnt ${spellName}.`);
                    } else {
                        heroCollectionObj[heroName].push(spellName); //If we do not have an arr in the object list of the listed spell we add it
                    }
                }
                break;
            case "Unlearn":
                if (!heroCollectionObj[heroName]) {
                    console.log(`${heroName} doesn't exist.`);
                } else {
                    if (!heroCollectionObj[heroName].includes(spellName)) { //We check if we have the spell in the obj array list
                        console.log(`${heroName} doesn't know ${spellName}.`);
                    } else {
                        let index = heroCollectionObj[heroName].indexOf(spellName); //If we do have it we check it's index and since it is in arr we need to remove it by it's current index
                        heroCollectionObj[heroName].splice(index, 1);
                    }
                }
                break;
        }

        textInput = input.shift();
    }

    let entriesArr = Object.entries(heroCollectionObj); 
    let sortedEntries = entriesArr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare((b[0]))); //We need to sort by the !COUNT! of spells in decending order and we check the count by using length

    console.log("Heroes:");
    for (const kvp of sortedEntries) {
        console.log(`== ${kvp[0]}: ${kvp[1].join(", ")}`); //As the output should as name:(list of spells, saparted by ,) for that very reason it was easier to use an obj=[] in the first place
    }
}

heroRecruitment([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]);