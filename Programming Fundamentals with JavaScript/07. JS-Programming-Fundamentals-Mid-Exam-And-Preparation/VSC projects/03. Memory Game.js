function solve(input) {

  let sequence = input.shift().split(" ");
  let elements = input.shift();
  let movesCount = 0;

  while (elements !== "end") {
    let [firstElement, secondElement] = elements.split(" ");
    firstElement = Number(firstElement);
    secondElement = Number(secondElement);
    movesCount++;

    if (firstElement === secondElement || (firstElement >= sequence.length || firstElement < 0) || secondElement >= sequence.length || secondElement < 0) {
        console.log("Invalid input! Adding additional elements to the board");

        let sequenceLength = Math.floor(sequence.length / 2);
        sequence.splice(sequenceLength, 0, `${-movesCount}a`);

        let indexes = sequence.indexOf(`${-movesCount}a`);
        sequence.splice(indexes + 1, 0, `${-movesCount}a`);
    } 
    else if(sequence[firstElement] === sequence[secondElement]) {
        console.log(`Congrats! You have found matching elements - ${sequence[firstElement]}!`);
        let element1 = elements[firstElement];
        let element2 = elements[secondElement];

        let firstIndex = sequence.indexOf(sequence[element1]);
            sequence.splice(firstIndex, 1);

        let secondIndex = sequence.indexOf(sequence[element2]);
            sequence.splice(secondIndex, 1);
    } 
    else if(sequence[firstElement] !== sequence[secondElement]) {
        console.log("Try again!");
    }

    if (sequence.length === 0) {
        console.log(`You have won in ${movesCount} turns!`);
    }

    elements = input.shift();
  }

  if (sequence.length > 0) {
      console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
  }
}

solve(["1 1 2 2 3 3 4 4 5 5 ", "1 0", "-1 0", "1 0 ", "1 0 ", "1 0 ", "end"]);
