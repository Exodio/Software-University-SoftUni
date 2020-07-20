function projectCreation(input) {
    let name = String(input.shift());
    let projects = Number(input.shift());
    let hours = projects * 3;

    let result = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`;

    console.log(result);

}

projectCreation(["Adrian", "4"]);