function counterStrike(input) {

    let energyInput = Number(input[0]); //we receive the initial number which we do not remove in order for the for loop to wrok
    let distanceInput = input.slice(1); //We check each input after the initial number without removing them
    let count = 0;
    let hasEnergy = true;

    for (let i = 0; i < distanceInput.length; i++) { //We go through each element of the array in order to compare
        let distance = distanceInput[i]; //The energy we need is equal each time to the second input we receive

        if (distance === 'End of battle') {
            break;
        }
        distance = Number(distance); 

        if ((energyInput - distance) < 0) { //In case we do not have enough energy we end the program
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energyInput} energy`);
            hasEnergy = false;
            break;
        } else {
            energyInput -= distance; //If we still have energy left we continue playing
            count++;
        }

        if (count % 3 === 0 && count !== 0) { //If the game is on every third we increase  the energy with the value of our current counter of won games
            energyInput += count;
        }
    }

    if (hasEnergy) { //If we have energy left and the game ends without an "End of battles" command 
        console.log(`Won battles: ${count}. Energy left: ${energyInput}`);
    }
}

// counterStrike([
//     '100', '10', '10',
//     '10', '1', '2',
//     '3', '73', '10'
// ]);

counterStrike(['200', '54', '14', '28', '13', 'End of battle']);