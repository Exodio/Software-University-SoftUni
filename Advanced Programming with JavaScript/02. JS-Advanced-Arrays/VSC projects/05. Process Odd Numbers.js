function solve(input) {

    let result = input.filter((element, position) => position % 2 !== 0).map(x => x * 2).reverse().join(" ");
    
    console.log(result);   
}

solve([10, 15, 20, 25]);