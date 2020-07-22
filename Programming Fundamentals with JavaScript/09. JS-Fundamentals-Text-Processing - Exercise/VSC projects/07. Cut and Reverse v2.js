function solve(input) {

    let leftSide = input.substring(0, input.length / 2);
    let rightSide = input.substring(input.length / 2);

    console.log(reversedResult(leftSide));
    console.log(reversedResult(rightSide));

    function reversedResult(string) {
        let result = string.split("").reverse().join("");

        return result;
    }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');