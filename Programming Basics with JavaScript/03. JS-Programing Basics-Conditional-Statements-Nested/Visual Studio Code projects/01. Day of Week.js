function dayOfWeek(input) {  //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array

    let day = Number(input.shift());

    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error")
            break;
    }

}
dayOfWeek(["1"]);