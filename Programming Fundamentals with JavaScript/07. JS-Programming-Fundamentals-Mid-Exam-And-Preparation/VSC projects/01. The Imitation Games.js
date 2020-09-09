function solve(input) {
  let message = input.shift();
  let commandLine = input.shift();

  while (commandLine !== "Decode") {
    let [command, firstArg, secondArg] = commandLine.split("|");

    if (command === "Move") {
      let lettersNumber = Number(firstArg);

      let lettersString = message.substring(0, lettersNumber);
      message = message.replace(lettersString, "");
      message = message.concat(lettersString);

    } else if (command === "Insert") {
      let index = Number(firstArg);
      let value = secondArg;

      message = message.split("");
      message.splice(index, 0, value);
      message = message.join("");
      
    } else if (command === "ChangeAll") {
      let substring = firstArg;
      let replacement = secondArg;

      while (message.includes(substring)) {
          message = message.replace(substring, replacement);
      }
    }
    commandLine = input.shift();
  }
  
  console.log(`The decrypted message is: ${message}`);
}

solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
