function passowrdGuess(...input) {
    let password = String(input.shift());

    if (password === "s3cr3t!P@ssw0rd") {

        console.log("Welcome");
    } else {

        console.log("Wrong password!");
    }
}
passowrdGuess(["s3cr3t!P@ssw0rd"]);