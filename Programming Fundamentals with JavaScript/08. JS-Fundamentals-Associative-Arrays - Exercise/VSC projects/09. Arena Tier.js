function solve(input) {
    let gladiatorPoolObj = {};

    for (let line of input) {
        if (line === "Ave Cesar") {
            break;
        }

        if (line.includes("->")) {
            let [gladiator, technique, skill] = line.split(" -> ");

            if (!gladiatorPoolObj.hasOwnProperty(gladiator)) {
                gladiatorPoolObj[gladiator] = {
                    techniques: {
                        [technique]: Number(skill),
                    },
                    skill: Number(skill),
                };
            } else {
                gladiatorPoolObj[gladiator].skill += Number(skill);

                if (gladiatorPoolObj[gladiator].techniques[technique]) {
                    let currentSkillValue = gladiatorPoolObj[gladiator].techniques[technique];
                    let newSkillValue = skill;

                    if (newSkillValue > currentSkillValue) {
                        gladiatorPoolObj[gladiator].techniques[technique] = Number(skill);
                    }
                } else {
                    gladiatorPoolObj[gladiator].techniques[technique] = Number(skill);
                }
            }
        } else if (line.includes("vs")) {
            let [gladiator1, gladiator2] = line.split(" vs ");

            if (
                gladiatorPoolObj.hasOwnProperty(gladiator1) &&
                gladiatorPoolObj.hasOwnProperty(gladiator2)
            ) {
                let gladiator1Techniques = Object.keys(
                    gladiatorPoolObj[gladiator1].techniques
                );
                let gladiator2Techniques = Object.keys(
                    gladiatorPoolObj[gladiator2].techniques
                );
                let gladiator1TotalSkill = gladiatorPoolObj[gladiator1].skill;
                let gladiator2TotalSkill = gladiatorPoolObj[gladiator2].skill;

                for (const techniqueCheck1 of gladiator1Techniques) {

                    for (const techniqueCheck2 of gladiator2Techniques) {

                        if (techniqueCheck1 === techniqueCheck2) {

                            if (gladiator1TotalSkill > gladiator2TotalSkill) {
                                delete gladiatorPoolObj[gladiator2];
                            } else if (gladiator1TotalSkill < gladiator2TotalSkill) {
                                delete gladiatorPoolObj[gladiator1];
                            }
                        }
                    }
                }
            }
        }
    }

    
    let arrEntries = Object.entries(gladiatorPoolObj);
    let sortedArrEntries = arrEntries.sort((a, b) => b[1].skill - a[1].skill || a[0].localeCompare(b[0]));

    for (const gladiatorAndSkill of sortedArrEntries) {
        console.log(`${gladiatorAndSkill[0]}: ${gladiatorAndSkill[1].skill} skill`); //The gladiators, ordered by total skill in desecending order, then ordered by name in ascending order

        let eachTechniqueEntries = Object.entries(gladiatorAndSkill[1].techniques);
        let sortedTechniqueEntries = eachTechniqueEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (const kvp of sortedTechniqueEntries) { //The gladiator's technique and skill, ordered desecending, then ordered by technique name in ascending order
            console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
        }
    }
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);

    // solve([
    //     'Pesho -> Duck -> 400',
    //     'Julius -> Shield -> 150',
    //     'Gladius -> Heal -> 200',
    //     'Gladius -> Support -> 250',
    //     'Gladius -> Shield -> 250',
    //     'Peter vs Gladius',
    //     'Gladius vs Julius',
    //     'Gladius vs Maximilian',
    //     'Ave Cesar'
    //     ]);