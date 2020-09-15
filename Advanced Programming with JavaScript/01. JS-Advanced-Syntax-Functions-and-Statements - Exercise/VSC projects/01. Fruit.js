function solve(argOne, argTwo, argThree) {
    
    let neededMoney = argThree * (argTwo / 1000);

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${(argTwo / 1000).toFixed(2)} kilograms ${argOne}.`);
}

solve('orange', 2500, 1.80);