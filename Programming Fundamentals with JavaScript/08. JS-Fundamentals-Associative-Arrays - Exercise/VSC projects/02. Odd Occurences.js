function solve(input) {

    let wordTrack = {};
    let arrInput = input.split(" ").map((element) => element.toLowerCase());

    let iniqueElements = arrInput.forEach((element) => {

        if (wordTrack.hasOwnProperty(element)) {
            wordTrack[element] += 1;
        } else {
            wordTrack[element] = 0; 
            wordTrack[element] += 1;
        }

    });

    
    let arrResult = Object.keys(wordTrack).filter((kvp) => wordTrack[kvp] % 2 !== 0);
    console.log(arrResult.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');