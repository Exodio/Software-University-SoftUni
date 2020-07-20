function solve(arrInput) {
    let nameOfWeponParts = arrInput.shift().split("|");

    for (eachElement of arrInput) {

        if (eachElement === "Done") {
            break;
        }

        let [command, position, index] = eachElement.split(" ");
        switch (command) {
            case "Move":
                index = +index;

                switch (position) {

                    case "Left":

                        if (index > 0 && index < nameOfWeponParts.length) {
                            [nameOfWeponParts[index - 1], nameOfWeponParts[index]] = [nameOfWeponParts[index], nameOfWeponParts[index - 1]];
                            break;
                        }
                        break;

                    case "Right":

                        if (index >= 0 && index < nameOfWeponParts.length - 1) {
                            [nameOfWeponParts[index + 1], nameOfWeponParts[index]] = [nameOfWeponParts[index], nameOfWeponParts[index + 1]];
                            break;
                        }
                        break;
                }
                break;

            case "Check":
                switch (position) {

                    case "Even":
                        console.log(nameOfWeponParts.filter((el, index) => index % 2 === 0).join(" "));
                        break;

                    case "Odd":
                        console.log(nameOfWeponParts.filter((el, index) => index % 2 !== 0).join(" "));
                        break;
                }
                break;
        }
    }
    console.log(`You crafted ${nameOfWeponParts.join("")}!`);

}
solve([
    "ha|Do|mm|om|er",
    "Move Right 0",
    "Move Left 3",
    "Check Odd",
    "Move Left 2",
    "Move Left 10",
    "Move Left 0",
    "Done",
]);