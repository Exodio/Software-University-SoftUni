function solve(input) {

    let result = "";

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let lastChar = result.slice(result.length - 1);

        if (lastChar !== currentChar) {
            result += currentChar;
        }
    }

    
    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');