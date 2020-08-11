function solve(input) {

    let shotTargets = input.shift().split(" ").map(Number);
    let targetsArr = shotTargets.slice();
    let sequence = input;

    let count = 0;

    for (let i = 0; i < sequence.length; i++) {

        for (let j = 0; j < shotTargets.length; j++) {

            if (sequence[i] < shotTargets.length) {

                    for (let k = 0; k < shotTargets.length; k++) {
                        if (targetsArr[k] !== -1 && shotTargets[sequence[i]] < shotTargets[k]) {
                            targetsArr[k] -= shotTargets[sequence[i]];
                        } else if (targetsArr[k] !== -1 && shotTargets[sequence[i]] >= shotTargets[k]) {
                            targetsArr[k] += shotTargets[sequence[i]];
                        }
                    }
                targetsArr.splice(sequence[i], 1, -1);
                shotTargets = targetsArr.slice();
                count++;
                break;

            } else {
                break;
            }
        }
        if (sequence[i] === "End") {
            console.log(`Shot targets: ${count} -> ${shotTargets.join(" ")}`);
        }
    }
}

solve(["24 50 36 70", "0", "4", "3", "1", "End"]);