// function addItem() {
//   let inputElement = document.getElementById("newItemText");
//   let ulElement = document.getElementsByTagName("ul")[0];
//   let addLiElement = document.createElement("li");

//   ulElement.appendChild(addLiElement);
//   addLiElement.textContent = inputElement.value;

//   inputElement.value = "";
// }

function addItem() {
  let inputElement = document.getElementById("newItemText");
  let addLiElement = document.createElement("li");
  let itemsListElement = document.getElementById("items");

  addLiElement.textContent = inputElement.value;
  itemsListElement.appendChild(addLiElement);

  inputElement.value = "";
}
