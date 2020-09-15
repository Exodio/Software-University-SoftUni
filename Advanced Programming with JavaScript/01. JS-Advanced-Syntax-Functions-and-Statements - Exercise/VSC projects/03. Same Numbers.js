function solve(input) {

    let number = input.toString().split("");
    let sameNumbers = true;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);

        if (sameNumbers) {
            sameNumbers = number[i] === number[0];
        } else{
            continue;
        }
    }

    console.log(sameNumbers);
    console.log(sum);
}

solve(2222222);