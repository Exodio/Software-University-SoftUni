// let manager = (function solution () {

//     let recipesLibrary = {

//         apple: {
//             carbohydrate: 1,
//             flavors: 2,
//         },
//         lemonade: {
//             carbohydrate: 10,
//             flavors: 20,
//         },
//         burger: {
//             carbohydrate: 5,
//             fat: 7,
//             flavors: 3,
//         },
//         eggs: {
//             protein: 5,
//             fat: 1,
//             flavors: 1,
//         },
//         turkey: {
//             protein: 10,
//             carbohydrate: 10,
//             fat: 10,
//             flavors: 10,
//         },
//     };

//     let robotStorage = {
//         protein: 0,
//         carbohydrate: 0,
//         fat: 0,
//         flavour: 0,
//     };

//     return function () {

//         let [action, component, quantity] = arguments[0].split(" ");
//         let commands = {
//             restock: () => {
//                 return restrock(component, quantity);
//             },
//             prepare: () => {
//                 return prepare(component, Number(quantity));
//             },
//             report: () => {
//                 return report();
//             },
//         };

//         return commands[action]();
//     }

//     function restrock(microelement, quantity) {
//         robotStorage[microelement] += Number(quantity);

//         return "Success";
//     }

//     function prepare(recipe, quantity) {
//         let recipeRequest = recipesLibrary[recipe];
//         let availableIngredients = Object.entries(recipeRequest);

//         for (const [product, amount] of availableIngredients) {
//             if (robotStorage[product] < amount * quantity) {

//                 return `Error: not enough ${product} in stock`;
//             }
//         }

//         for (const [product, amount] of availableIngredients) {
//             robotStorage[product] -= quantity * amount;
//         }

//         return "Success";
//     }

//     function report() {

//         return Object.keys(robotStorage).map((kvp) => {

//             return `${kvp} = ${robotStorage[kvp]}`
//         }).join(" ");
//     }
// });

// function solution() {

//     const recipesLibrary = {
//         apple: {
//             carbohydrate: 1,
//             flavour: 2,
//         },
//         lemonade: {
//             carbohydrate: 10,
//             flavour: 20,
//         },
//         burger: {
//             carbohydrate: 5,
//             fat: 7,
//             flavour: 3,
//         },
//         eggs: {
//             protein: 5,
//             fat: 1,
//             flavour: 1,
//         },
//         turkey: {
//             protein: 10,
//             fat: 10,
//             carbohydrates: 10,
//             flavour: 10,
//         }
//     }

//     const robotStorage = {
//         protein: 0,
//         carbohydrate: 0,
//         fat: 0,
//         flavour: 0,
//     };

//     const commandsList = {
//         restock: (microElement, quantity) => {
//             robotStorage[microElement] += Number(quantity);
//             return 'Success';
//         },
//         prepare: (recipe, quanity) => {
//             let mealRequest = Object.entries(recipesLibrary[recipe]);

//             for (let [item, neededAmount] of mealRequest) {
//                 if (robotStorage[item] < neededAmount * quanity) {
//                     return `Error: not enough ${item} in stock`;
//                 }
//             }

//             mealRequest.forEach(([item, neededAmount]) => {
//                 robotStorage[item] -= neededAmount * quanity;
//             });

//             return 'Success';
//         },
//         report: () => Object.entries(robotStorage).
//         map(([microElement, count]) =>
//             `${microElement}=${count}`).join(" "),
//     };

//     return (input) => {
//         let [command, item, count] = input.split(" ");

//         return commandsList[command](item, Number(count));
//     }
// }

solution = () => {

  let recipesLibrary = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  let robotStorage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let commandsList = {
    restock: (microelement, quantity) => {
      robotStorage[microelement] += Number(quantity);
      return "Success";
    },
    prepare: (recipe, quantity) => {
      let recipeRequest = Object.entries(recipesLibrary[recipe]);
      for (const [product, neededAmount] of recipeRequest) {

        if (robotStorage[product] < neededAmount * quantity) {
          return `Error: not enough ${product} in stock`;
        }
      }

      recipeRequest.forEach(([product, neededAmount]) => {
        robotStorage[product] -= neededAmount * quantity;
      });
      return "Success";
    },
    report: () =>
      Object.entries(robotStorage)
        .map(([product, count]) => `${product}=${count}`)
        .join(" "),
  };

  return (input) => {
    let [command, item, count] = input.split(" ");
    return commandsList[command](item, Number(count));
  };
}

let manager = solution();
[
  "prepare turkey 1",
  "restock protein 10",
  "prepare turkey 1",
  "restock carbohydrate 10",
  "prepare turkey 1",
  "restock fat 10",
  "prepare turkey 1",
  "restock flavour 10",
  "prepare turkey 1",
  "report",
].forEach((commandLine) => console.log(manager(commandLine)));
