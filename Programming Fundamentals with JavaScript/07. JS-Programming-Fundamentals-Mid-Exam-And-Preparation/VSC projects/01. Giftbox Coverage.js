function solve(input) {

    let sideSize = Number(input[0]);
    let sheetsNumber = Number(input[1]);
    let sheetSize = Number(input[2]);
    
    let originalSheetSize = sheetSize;
    let giftBoxArea = sideSize * sideSize * 6;
    let coverage = 0;
    
    for (let i = 1; i <= sheetsNumber; i++) {
        if (i % 3 === 0) {
            sheetSize *= 0.25;
        }
        coverage += sheetSize;
        sheetSize = originalSheetSize;
    }

    let percentageResult = coverage / giftBoxArea * 100; 
    console.log(`You can cover ${percentageResult.toFixed(2)}% of the box.`);
}

solve(["5", "30", "4"]);
