function numbInRange(input) { //We place (...input) in order to avoid errors in judge, as we declare the input goes into an array
    let number = Number(input.shift());
    
    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    }
    else{
        console.log("No");

    }
}
numbInRange(["-25"]);