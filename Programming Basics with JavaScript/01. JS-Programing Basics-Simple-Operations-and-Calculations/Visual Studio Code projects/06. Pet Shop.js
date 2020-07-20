function PetShop(input) {

let dogCount = Number(input.shift());
let otherAnimalCount = Number(input.shift());

let dogFoodStorePrice = 2.50;
let otherAnimalFoodPrice = 4;

let dogFoodTotal = dogCount * 2.50;
let otherAnimalTotal = otherAnimalCount * 4;

result = dogFoodTotal + otherAnimalTotal;

console.log(result.toFixed(2));
}

PetShop(["5", "4"]);