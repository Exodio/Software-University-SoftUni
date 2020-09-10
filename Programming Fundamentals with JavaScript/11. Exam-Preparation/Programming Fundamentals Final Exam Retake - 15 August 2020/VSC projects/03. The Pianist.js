function solve(input) {

  let piecesNumber = Number(input.shift());
  let piecesObj = {};

  for (let i = 0; i < piecesNumber; i++) {
    let pieces = input.shift();
    let [piece, composer, key] = pieces.split("|");

    if (!piecesObj[piece]) {
      piecesObj[piece] = {
        composer: composer,
        key: key,
        inCollection: true,
      };
    }
  }

  let commandLine = input.shift();

  while (commandLine !== "Stop") {
    let [command, piece, argOne, argTwo] = commandLine.split("|");

    if (command === "Add") {
      let composer = argOne;
      let key = argTwo;

      if (!piecesObj[piece] || piecesObj[piece].inCollection === false) {
        piecesObj[piece] = {
          composer: composer,
          key: key,
          inCollection: true,
        };
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      } else {
        console.log(`${piece} is already in the collection!`);
      }

    } else if (command === "Remove") {

      if (piecesObj[piece] && !piecesObj[piece].inCollection === false) {
        piecesObj[piece].inCollection = false;
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }

    } else if (command === "ChangeKey") {
      let newKey = argOne;

      if (piecesObj[piece]) {
        piecesObj[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    }

    commandLine = input.shift();
  }

  let keyPieces = Object.keys(piecesObj).filter((x) => piecesObj[x].inCollection !== false);
  let sortedKeyPieces = keyPieces.sort((a, b) => a.localeCompare(b) || piecesObj[a].composer.localeCompare(piecesObj[b].composer));

  for (const kvp of sortedKeyPieces) {
    console.log(`${kvp} -> Composer: ${piecesObj[kvp].composer}, Key: ${piecesObj[kvp].key}`);
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);