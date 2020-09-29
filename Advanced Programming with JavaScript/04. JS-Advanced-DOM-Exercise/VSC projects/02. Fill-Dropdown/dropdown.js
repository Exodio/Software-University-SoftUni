function addItem() {

    let textElement = document.getElementById("newItemText");
    let valueElement = document.getElementById("newItemValue");
    let menuElement = document.getElementById("menu");
    menuElement.insertAdjacentHTML("beforeend", `<option-element value-element="${valueElement.value}">${textElement.value}</option-element>`);

    textElement.value = "";
    valueElement.value = "";
}