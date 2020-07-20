function solve(stringArr) {
    let heroArr = [];

    stringArr.forEach(eachElement => {
        let line = eachElement.split(" / ");
        let name = line[0];
        let level = Number(line[1]);
        let items = line[2].split(", ").sort((a, b) => a.localeCompare(b));

        heroArr.push({
            name,
            level,
            items
        });
    })

    heroArr.sort((a, b) => a.level - b.level);
    heroArr.forEach(eachHero => {
        console.log(`Hero: ${eachHero.name}\n level => ${eachHero.level}\n items => ${eachHero.items.join(", ")}`)
    });

}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);