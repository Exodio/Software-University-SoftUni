// function addItem() {

//     let inputElement = document.getElementById("newText");
//     let ulItemsElement = document.getElementById("items");
//     let addNewLiElement = document.createElement("li");
//     ulItemsElement.appendChild(addNewLiElement);

//     addNewLiElement.textContent = inputElement.value;
//     inputElement.value = "";

//     let deleteButton = document.createElement("a");
//     addNewLiElement.appendChild(deleteButton);

//     deleteButton.textContent = `[Delete]`;
//     deleteButton.href = "#";

//     deleteButton.addEventListener("click", function (event) {
//         event.preventDefault();

//         this.parentElement.parentElement.removeChild(this.parentElement);
//     });
// }


// function addItem() {

//     let newInputElement = document.getElementById("newText").value;
//     let ulItemsElement = document.getElementById("items");

//     let listItemElement = document.createElement("li");
//     listItemElement.textContent = newInputElement;

//     let removeElement = document.createElement("a");
//     removeElement.href = "#";
//     let linkRemoveElementText = document.createTextNode("[Delete]"); //removeElement.textConcent = `[Delete]`;

//     removeElement.addEventListener("click", deleteButton);

//     removeElement.appendChild(linkRemoveElementText);
//     listItemElement.appendChild(removeElement);
//     ulItemsElement.appendChild(listItemElement);

//     function deleteButton() {
//         listItemElement.remove();
//     }
// }

function addItem() {

    let newInputElement = document.getElementById("newText").value;
    let ulItemsElement = document.getElementById("items");
    let listItemElement = document.createElement("li");

    listItemElement.textContent = newInputElement;

    let removeElement = document.createElement("a");
    removeElement.href = "#";
    let linkRemoveElementText = document.createTextNode("[Delete]"); //removeElement.textConcent = `[Delete]`;

    removeElement.appendChild(linkRemoveElementText);
    listItemElement.appendChild(removeElement);
    ulItemsElement.appendChild(listItemElement);

    removeElement.addEventListener("click", () => {
        listItemElement.remove();
    });
}