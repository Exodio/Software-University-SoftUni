function counterStrike(input) {

    let energyInput = input[0];
    let distanceInput = input.slice(1);
    let count = 0;

    for (let i = 0; i < distanceInput.length; i++) {
        let distance = distanceInput[i];
        
        if (distance === 'End of battle') {
            break;
        }

        if ((energyInput - distance) < 0) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energyInput} energy`);
            return;
        } else {
            energyInput -= distance;
            count++;
        }

        if (count % 3 === 0) {
            energyInput += count;
        }
    }

    console.log(`Won battles: ${count}. Energy left: ${energyInput}`);
}

// counterStrike([
//     '100', '10', '10',
//     '10', '1', '2',
//     '3', '73', '10'
// ]);

counterStrike(['200', '54', '14', '28', '13', 'End of battle']);