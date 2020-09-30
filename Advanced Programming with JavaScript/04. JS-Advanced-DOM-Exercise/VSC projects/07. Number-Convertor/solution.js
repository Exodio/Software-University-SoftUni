function solve() {

    let select = document.getElementById("selectMenuTo");
    let binary = document.createElement("option");
    let hexadecimal = document.createElement("option");

    binary.value = "binary";
    hexadecimal.value = "hexadecimal";
    binary.textContent = "Binary";
    hexadecimal.textContent = "Hexadecimal";

    select.appendChild(binary);
    select.appendChild(hexadecimal);

    let inputElement = document.getElementById("input");
    let resultElement = document.getElementById("result");

    let buttonElement = document.getElementsByTagName("button")[0];
    buttonElement.addEventListener('click', function () {

        if (select.value === "binary") {
            resultElement.value = (Number(inputElement.value)).toString(2);
        } else if (select.value === "hexadecimal") {
            resultElement.value = (Number(inputElement.value)).toString(16).toUpperCase();
        }
    });
}