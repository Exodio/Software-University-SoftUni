function solve(input) {

    let textInput = input;
    let pattern = /(=|\/)(?<destinations>[A-Z][A-Za-z]{2,})\1/g;

    let travelPoints = 0;
    let destinationsArr = [];

    while ((result = pattern.exec(textInput))) {
        let destination = result.groups.destinationsArr;
        travelPoints += destination.length;

        destinationsArr.push(destination);
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");