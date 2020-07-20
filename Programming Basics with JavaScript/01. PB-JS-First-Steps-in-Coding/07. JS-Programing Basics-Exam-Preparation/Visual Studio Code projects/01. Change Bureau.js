function solve(input) {
    let bitcoins = Number(input.shift());
    let yoans = Number(input.shift());
    let comission = Number(input.shift());

    let bitcoinsToLeva = bitcoins * 1168;
    let yoansToDollars = yoans * 0.15;
    let yoansToLeva = yoansToDollars * 1.76;

    let sumToEuro = (bitcoinsToLeva + yoansToLeva) / 1.95;
    let comissionToEuro = sumToEuro * comission / 100;
    let result = ((sumToEuro - comissionToEuro).toFixed(2));


    console.log(result);
}

solve(["1",
    "5",
    "5"
]);