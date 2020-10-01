// function solve() {

//     let expressionElement = document.getElementById("expressionOutput");

//     let operatorsArr = ["+", "-", "*", "/"];
//     let operationsObj = {
//         "+": (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber),
//         "-": (firstNumber, secondNumber) => Number(firstNumber) - Number(secondNumber),
//         "*": (firstNumber, secondNumber) => Number(firstNumber) * Number(secondNumber),
//         "/": (firstNumber, secondNumber) => Number(firstNumber) / Number(secondNumber),
//     };


//     let resultElement = document.getElementById("resultOutput");

//     let keysElement = document.getElementsByClassName("keys")[0];
//     keysElement.addEventListener("click", ({
//         target: {
//             value,
//         }
//     }) => {

//         if (!value) {
//             return;
//         } else if (operatorsArr.includes(value)) {
//             expressionElement.innerHTML += ` ${value} `;
//             return;
//         }


//         if (value === "=") {
//             let expressionParameters = expressionElement.innerHTML.split(" ");

//             if (expressionParameters[2]) {
//                 resultOutput.innerHTML = operationsObj[expressionParameters[1]](expressionParameters[0], expressionParameters[2]);
//             } else {
//                 resultElement.innerHTML = "NaN";
//             }

//             return;
//         }

//         expressionElement.innerHTML += value;
//     });


//     let clearElement = document.getElementsByClassName("clear")[0];
//     clearElement.addEventListener("click", (x) => {
//         if (x.target.value === "Clear") {
//             expressionElement.innerHTML = "";
//             resultElement.innerHTML = "";
//         }
//     });
// }

function solve() {

    let expressionElement = document.getElementById("expressionOutput");
    let resultElement = document.getElementById("resultOutput");

    document.querySelector(".keys").addEventListener("click", clickSymbol);
    document.querySelector(".keys").addEventListener("click", clearSymbol);

    function clickSymbol(event) {
        let action = event.target.value;

        switch (action) {
            case "+":
            case "-":
            case "*":
            case "/":
                expressionElement.textContent += ` ${action} `;
                break;
            case "=":
                let [leftOperand, operator, rightOperand] = expressionElement.textContent.split(" ");

                if (!rightOperand || !operator) {
                    resultElement.textContent = "NaN";
                } else {
                    resultElement.textContent = resultCalculation((Number(leftOperand), operator, Number(rightOperand)));
                }
                break;

            default:
                expressionElement.textContent += action;
        }
    }

    function resultCalculation(leftOperand, operator, rightOperand) {
        switch (operator) {
            case "+":
                return leftOperand + rightOperand;

            case "-":
                return leftOperand - rightOperand;

            case "*":
                return leftOperand * rightOperand;

            case "/":
                return leftOperand / rightOperand;
        }
    }

    function clearSymbol() {
        expressionElement.textContent = "";
        resultElement.textContent = "";
    }
}