function solve() {

    let expressionElement = document.getElementById("expressionOutput");

    let operatorsArr = ["+", "-", "*", "/"];
    let operationsObj = {
        "+": (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber),
        "-": (firstNumber, secondNumber) => Number(firstNumber) - Number(secondNumber),
        "*": (firstNumber, secondNumber) => Number(firstNumber) * Number(secondNumber),
        "/": (firstNumber, secondNumber) => Number(firstNumber) / Number(secondNumber),
    };


    let resultElement = document.getElementById("resultOutput");

    let keysElement = document.getElementsByClassName("keys")[0];
    keysElement.addEventListener("click", ({
        target: {
            value,
        }
    }) => {

        if (!value) {
            return;
        } else if (operatorsArr.includes(value)) {
            expressionElement.innerHTML += ` ${value} `;
            return;
        }


        if (value === "=") {
            let expressionParameters = expressionElement.innerHTML.split(" ");

            if (expressionParameters[2]) {
                resultOutput.innerHTML = operationsObj[expressionParameters[1]](expressionParameters[0], expressionParameters[2]);
            } else {
                resultElement.innerHTML = "NaN";
            }

            return;
        }

        expressionElement.innerHTML += value;
    });


    let clearElement = document.getElementsByClassName("clear")[0];
    clearElement.addEventListener("click", (x) => {
        if (x.target.value === "Clear") {
            expressionElement.innerHTML = "";
            resultElement.innerHTML = "";
        }
    });
}