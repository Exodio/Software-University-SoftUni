function solve(input) {
  let freeSpaceWidth = Number(input.shift());
  let freeSpaceLength = Number(input.shift());
  let freeSpaceHigth = Number(input.shift());

  let commandCheck = input.shift(); //We check if the command == "Done"

  let freeSpaceTotal = freeSpaceWidth * freeSpaceLength * freeSpaceHigth;

  let totalVolume = 0;

  while (commandCheck !== "Done") { //We enter the loop as the command != "Done"
    let commandIntoBox = Number(commandCheck); //Now we make the possible string command into a Number
    totalVolume += commandIntoBox;

    if (totalVolume >= freeSpaceTotal) {
      console.log(`No more free space! You need ${totalVolume - freeSpaceTotal} Cubic meters more.`)
      break;

    } else {
      commandCheck = input.shift();
    }
  }

  if (totalVolume < freeSpaceTotal) {

    console.log(`${freeSpaceTotal - totalVolume} Cubic meters left.`)
  }

}
solve(["10",
  "10",
  "2",
  "20",
  "20",
  "20",
  "20",
  "122"
]);