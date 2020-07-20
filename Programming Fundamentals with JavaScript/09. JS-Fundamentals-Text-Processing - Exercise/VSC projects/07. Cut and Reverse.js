function solve(input) {

    let leftSide = input.slice(0, input.length / 2);
    leftSide = leftSide.split("");

    rightSide = input.slice(input.length / 2);
    rightSide = rightSide.split("");


    console.log(leftSide.reverse().join(""));
    console.log(rightSide.reverse().join(""));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
