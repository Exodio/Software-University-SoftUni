function personalTitles(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array

    let age = Number(input.shift());
    let gen = String(input.shift());

    if (gen === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }


    }
    if (gen === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }

    }
}
personalTitles(["12",
    "f"
]);