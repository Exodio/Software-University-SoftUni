function tradeCommissions(input) {
    let town = String(input.shift());
    let sells = Number(input.shift());

    let comission = 0;

    if (town === "Sofia") {

        if (sells >= 0 && sells <= 500) {

            comission = sells * 0.05;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells >= 500 && sells <= 1000) {

            comission = sells * 0.07;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells >= 1000 && sells <= 10000) {

            comission = sells * 0.08;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells > 10000) {

            comission = sells * 0.12;

            console.log(`${comission.toFixed(2)}`);

        } else {
            console.log("error");
        }

    } else if (town === "Varna") {

        if (sells >= 0 && sells <= 500) {

            comission = sells * 0.045;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells >= 500 && sells <= 1000) {

            comission = sells * 0.075;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells >= 1000 && sells <= 10000) {

            comission = sells * 0.1;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells > 10000) {

            comission = sells * 0.13;

            console.log(`${comission.toFixed(2)}`);

        } else {
            console.log("error");
        }

    } else if (town === "Plovdiv") {

        if (sells >= 0 && sells <= 500) {

            comission = sells * 0.055;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells >= 500 && sells <= 1000) {

            comission = sells * 0.08;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells >= 1000 && sells <= 10000) {

            comission = sells * 0.12;

            console.log(`${comission.toFixed(2)}`);

        } else if (sells > 10000) {

            comission = sells * 0.145;

            console.log(`${comission.toFixed(2)}`);

        } else {
            console.log("error");
        }

    } else {
        console.log("error");
    }
}

tradeCommissions(["Sofia",
    "1500"
]);