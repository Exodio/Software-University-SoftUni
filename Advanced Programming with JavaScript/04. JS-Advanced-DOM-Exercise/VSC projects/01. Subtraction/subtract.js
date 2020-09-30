// function subtract() {

//     let firstNameElement = document.getElementById("firstNumber").value;
//     let secondNameElement = document.getElementById("secondNumber").value;
//     document.getElementById("result").textContent = firstNameElement - secondNameElement;
// }

function subtract() {

    let firstNameElement = document.getElementById("firstNumber").value;
    let secondNameElement = document.getElementById("secondNumber").value;

    let calculation = Number(firstNameElement) - Number(secondNameElement);
    let resultElement = document.getElementsById("result").innerHTML = calculation;
}