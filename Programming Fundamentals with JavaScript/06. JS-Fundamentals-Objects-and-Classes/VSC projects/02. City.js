function solve(name, area, population, country, postcode) {
    let cityObject = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postcode,
    };

    for (let objects in cityObject) {
        console.log(`${objects} -> ${cityObject[objects]}`);
    }

}
solve("Sofia", " 492", "1238438", "Bulgaria", "1000");