// function addItem() {

//     let textElement = document.getElementById("newItemText");
//     let valueElement = document.getElementById("newItemValue");
//     let menuElement = document.getElementById("menu");
//     menuElement.insertAdjacentHTML("beforeend", `<option-element value-element="${valueElement.value}">${textElement.value}</option-element>`);

//     textElement.value = "";
//     valueElement.value = "";
// }

function addItem() {

    let textElement = document.getElementById("newItemText");
    let valueElement = document.getElementById("newItemValue");
    let menuElement = document.getElementById("menu");
    
    let selectOption = `<option value =${valueElement.value}>${textElement.value}</option>`; //selectionOption = document.createElement(optionElement); //selectOption.value = valueElement.value; selectOption.value = textElement.value;
    menuElement.innerHTML += selectOption; //selectOption.appendChild(menuOption);

    textElement.value = "";
    valueElement.value = "";
}