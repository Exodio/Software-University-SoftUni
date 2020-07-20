function animalType(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array

    let animalType = String(input.shift());

    if (animalType === "dog") {
        console.log("mammal");

    } else if (animalType === "crocodile" || animalType === "tortoise" || animalType === "snake") {
        console.log("reptile");

    } else {
        console.log("unknown");


    }
}
animalType(["cat"]);