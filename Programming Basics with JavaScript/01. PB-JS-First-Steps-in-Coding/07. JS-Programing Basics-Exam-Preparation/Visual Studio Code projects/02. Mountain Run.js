function solve(input) {
    let currentRecord = Number(input.shift());  
    let goalDistance = Number(input.shift());
    let timeInSeconds = Number(input.shift());

    let goalInSeconds = goalDistance * timeInSeconds;
    let terrainFactor = 30 * (Math.floor(goalDistance / 50));
    let totalTimeNeeded = goalInSeconds + terrainFactor;

    if (currentRecord < totalTimeNeeded) {
        console.log(`No! He was ${(totalTimeNeeded - currentRecord).toFixed(2)} seconds slower.`)
    }
    else if(totalTimeNeeded === currentRecord){
        console.log(`No! He was ${(totalTimeNeeded - currentRecord).toFixed(2)} seconds slower.`)
    }
    else{
        console.log(`Yes! The new record is ${totalTimeNeeded.toFixed(2)} seconds.`)
    }

}
solve(["5554.36",
 "1340",
  "3.23",
]);