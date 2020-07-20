function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for (let floorCounter = floors; floorCounter >= 1; floorCounter--) {
        let result = " "; //We keep our result as a buffer 
        for (let roomCounter = 0; roomCounter <= rooms; roomCounter++) {
            if (floors === floorCounter) {
                result += (`L${floorCounter}${roomCounter} `);

            } else if (roomCounter % 2 == 0) {
                result += (`O${floorCounter}${roomCounter} `);

            } else {
                result += (`A${floorCounter}${roomCounter} `);

            }
        }
        console.log(result);
    }
}
solve(["6",
    "4"
]);