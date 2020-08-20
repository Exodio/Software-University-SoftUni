function solve(input) {
  let pirateShip = input[0].split(">").map(Number);
  let warShip = input[1].split(">").map(Number);
  let maxHealthCapacity = Number(input[2]);
  let commandLine = input.slice(3);

  let isAlive = true;
  let pirateshipDead = false;
  let warshipDead = false;

  for (let i = 0; i < commandLine.length; i++) {
    let tokens = commandLine[i].split(" ");

    if (tokens[0] === "Retire") {
      break;
    }

    if (tokens[0] === "Fire") {
      let index = Number(tokens[1]);
      let damage = Number(tokens[2]);

      if (index < 0 || index >= warShip.length) {
        continue;
      } else {
        warShip.splice(index, 1, warShip[index] - damage);
        if (warShip[index] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          warshipDead = true;
          break;
        }
      }
    } else if (tokens[0] === "Defend") {
      let startIndex = Number(tokens[1]);
      let endIndex = Number(tokens[2]);
      let dmg = Number(tokens[3]);
      startIndex = Math.min(startIndex, endIndex);
      endIndex = Math.max(startIndex, endIndex);

      if (!(startIndex < 0 || pirateShip.length <= startIndex) &&
        !(endIndex < 0 || pirateShip.length <= endIndex)
      ) {
        for (let range = startIndex; range <= endIndex; range++) {
          pirateShip.splice(range, 1, pirateShip[range] - dmg);
          if (pirateShip[range] <= 0) {
            console.log("You lost! The pirate ship has sunken.");
            pirateshipDead = true;
            break;
          }
        }
      }
    } else if (tokens[0] === "Repair") {
      let repairIndex = Number(tokens[1]);
      let repairHealth = Number(tokens[2]);

      if (repairIndex < 0 || pirateShip.length <= repairIndex) {
        continue;
      } else {
        if (pirateShip[repairIndex] + repairHealth > maxHealthCapacity) {
          pirateShip[repairIndex] = maxHealthCapacity;
        } else {
          pirateShip.splice(
            repairIndex,
            1,
            pirateShip[repairIndex] + repairHealth
          );
        }
      }
    } else if (tokens[0] === "Status") {
      let repairsNeededCount = 0;

      for (const eachSection of pirateShip) {
        if ((eachSection / maxHealthCapacity) * 100 < 20) {
          repairsNeededCount++;
        }
      }
      console.log(`${repairsNeededCount} sections need repair.`);
    }

    if (isAlive === false) {
      break;
    }
  }

  if (pirateshipDead === false && warshipDead=== false) {
    let pirateShipSum = 0;
    let warShipSum = 0;

    for (const eachPirateShipSection of pirateShip) {
      pirateShipSum += eachPirateShipSection;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);

    for (const eachWarShipSection of warShip) {
      warShipSum += eachWarShipSection;
    }
    console.log(`Warship status: ${warShipSum}`);
  }
}

solve([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 4 330",
  "Defend 4 3 11",
  "Repair 3 18",
  "Retire",
]);
