function solve(input) {

  let peopleQueue = Number(input.shift());
  let wagonsStatus = input.shift().split(" ").map(Number);

  for (let i = 0; i < wagonsStatus.length; i++) {
    let wagonTokens = wagonsStatus[i];

    if (wagonTokens < 4) {
      while (wagonTokens !== 4) {
        wagonTokens++;
        peopleQueue--;

        if (peopleQueue === 0) {
          break;
        }
      }
      wagonsStatus[i] = wagonTokens;

      if (peopleQueue === 0) {
        break;
      }
    }
  }

  let output = wagonsStatus.filter((space) => space !== 4);

  if (output.length !== 0 && peopleQueue === 0) {
    console.log("The lift has empty spots!");
    console.log(wagonsStatus.join(" "));
  } 
  else if (!(output.length === 0 && peopleQueue === 0)) {
    console.log(`There isn't enough space! ${peopleQueue} people in a peopleQueue!`);
    console.log(wagonsStatus.join(" "));
  } 
  else if (output.length === 0 && peopleQueue === 0) {
    console.log(wagonsStatus.join(" "));
  }
}

solve(["15", "0 0 0 0"]);
