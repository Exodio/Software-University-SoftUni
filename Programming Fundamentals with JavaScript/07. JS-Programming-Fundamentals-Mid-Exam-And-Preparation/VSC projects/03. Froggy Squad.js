function solve(input) {
  let frogNames = input[0].split(" ");
  let commandLine = input.slice(1);

  for (let i = 0; i < commandLine.length; i++) {
    const tokens = commandLine[i].split(" ");

    if (tokens[0] === "Join") {
      let name = tokens[1];
      frogNames.push(name);
      
    } else if (tokens[0] === "Jump") {
      let name = tokens[1];
      let index = Number(tokens[2]);

      if (index < 0 || index >= frogNames.length) {
        continue;
      } else {
        frogNames.splice(index, 0, name);
      }
    } else if (tokens[0] === "Dive") {
      let index = Number(tokens[1]);

      if (index < 0 || index >= frogNames.length) {
        continue;
      } else {
        frogNames.splice(index, 1);
      }
    } else if (tokens[0] === "First") {
      let count = Number(tokens[1]);

      let output = frogNames.slice(0, count);
      console.log(output.join(" "));

    } else if (tokens[0] === "Last") {
      let count = Number(tokens[1]);

      let output = frogNames.reverse().slice(0, count);
      console.log(output.reverse().join(" "));
      frogNames.reverse();

    } else if (tokens[0] === "Print") {
      if (tokens[1] === "Normal") {
        console.log(`Frogs: ${frogNames.join(" ")}`);
        break;

      } else if (tokens[1] === "Reversed") {
        console.log(`Frogs: ${frogNames.reverse().join(" ")}`);
        break;
      }
    }
  }
}

solve([
  "Blake Muggy Kishko",
  "Join Kvachko",
  "Dive 0",
  "First 10",
  "Print Reversed",
]);
