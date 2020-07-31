function practiceSessions(input) {

  let raceObj = {};
  input.forEach((eachLine) => {
    let [command, firstArgument, secondArgument, thirdArgument] = eachLine.split("->");

    switch (command) {

      case "Add":
        if (!raceObj.hasOwnProperty(firstArgument)) {
          raceObj[firstArgument] = [];
          raceObj[firstArgument].push(secondArgument);
        } else {
          raceObj[firstArgument].push(secondArgument);
        }
        break;

      case "Move":
        if (raceObj.hasOwnProperty(firstArgument)) {
          let index = raceObj[firstArgument].indexOf(secondArgument);

          if (index >= 0 && index < raceObj[firstArgument].length) {
            raceObj[firstArgument].splice(index, 1);
            raceObj[thirdArgument].push(secondArgument);
          }
        }
        break;

      case "Close":
        if (raceObj.hasOwnProperty(firstArgument)) {
          delete raceObj[firstArgument];
        }
        break;

      case "END":
        break;
    }
  });

  let sortedRaceObjEntries = Object.entries(raceObj).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

  console.log("Practice sessions:");
  for (let kvp of sortedRaceObjEntries) {
    console.log(`${kvp[0]}`);

    for (let key of kvp[1]) {
      console.log(`++${key}`);
    }
  }
}

practiceSessions([
  'Add->Glencrutchery Road->Giacomo Agostini',
  'Add->Braddan->Geoff Duke',
  'Add->Peel road->Mike Hailwood',
  'Add->Glencrutchery Road->Guy Martin',
  'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
  'Close->Braddan',
  'END'
]);