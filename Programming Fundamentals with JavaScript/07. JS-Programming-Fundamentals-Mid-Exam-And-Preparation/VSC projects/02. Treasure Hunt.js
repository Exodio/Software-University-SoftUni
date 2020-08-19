function solve(input) {

  let initialLoot = input[0].split("|");
  let commandLine = input.slice(1);

  for (let i = 0; i < commandLine.length; i++) {
    let tokens = commandLine[i].split(" ");
    let arguments = tokens.slice(1);

    if (tokens[0] === "Yohoho!") {
      break;
    }

    if (tokens[0] === "Loot") {
      for (const eachElement of arguments) {
        if (!initialLoot.includes(eachElement)) {
          initialLoot.unshift(eachElement);
        }
      }
    } else if (tokens[0] === "Drop") {
      arguments = Number(arguments);

      if (!(arguments >= initialLoot.length || arguments < 0)) {
        let loot = initialLoot.splice(arguments, 1);
        initialLoot.push(loot);
      } else {
        continue;
      }
    } else if (tokens[0] === "Steal") {
      let count = Number(arguments);

      if (count > initialLoot.length) {
        count = initialLoot.length;
      }
      let stolenItems = initialLoot.splice(initialLoot.length - count, count);
      console.log(stolenItems.join(", "));
    }
  }

  if (initialLoot.length <= 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    let averageTreasureGain = 0;

    for (const treasureItems of initialLoot) {
      averageTreasureGain += treasureItems.length;
    }
    let result = averageTreasureGain = averageTreasureGain / initialLoot.length;
    console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
  }
}

solve([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
