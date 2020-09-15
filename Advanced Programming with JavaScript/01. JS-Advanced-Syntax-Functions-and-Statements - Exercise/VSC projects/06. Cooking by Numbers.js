function solve(input) {

    let number = Number(input.shift());

    for (const opperation of input) {
        switch (opperation) {
            case "chop":
                number = number / 2;
                console.log(number);
                break;

            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;

            case "spice":
                number = number + 1;
                console.log(number);
                break;

            case "bake":
                number = number * 3;
                console.log(number);
                break;

            case "fillet":
                number = number - (number * 0.2);
                console.log(number);
                break;
        }
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);