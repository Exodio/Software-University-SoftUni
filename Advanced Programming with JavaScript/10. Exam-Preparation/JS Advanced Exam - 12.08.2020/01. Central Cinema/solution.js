function solve() {

    let inputs = document.querySelectorAll("input"); //select all inputs
    let onScreenButton = document.querySelector("button"); //select the on screen button
    let ulSections = document.querySelectorAll("section"); //select all sections

    let name = inputs[0]; //first input section
    let hall = inputs[1]; //second input section
    let ticketPrice = inputs[2]; //third input section

    let moviesUlSection = ulSections[0].children[1]; //(movie section)Section created in order to save listItems for each movie
    let archiveSection = ulSections[1].children[1]; //(archive section) Section created in the archive phase in order to move the li of data
    let clearButton = ulSections[1].children[2]; //(delete li) deletes all li elements from the archive section 

    onScreenButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (name === "" || hall === "" || ticketPrice === "" || !Number(ticketPrice.value)) { //if the buttons are not filled and the ticket price.value is not a number
            return;
        }

        let li = document.createElement("li"); //create new li element in the ul
        let liSpan = validateElement("span", name.value); //validate each section under the li column
        let liStrong = validateElement("strong", `Hall: ${hall.value}`);

        let div = document.createElement("div"); //create new div element in the li
        let divStrong = validateElement("strong", ticketPrice.value); //validate each section in the div under the li column
        let divInput = document.createElement("input");
        divInput.placeholder = "Tickets Sold";

        let divArchiveButton = validateElement("button", "Archive"); //add archive to the div in the li

        moviesUlSection.appendChild(li); //(movie section) append each li to the movie section
        li.appendChild(liSpan);
        li.appendChild(liStrong);

        li.appendChild(div); // append each div to the li section
        div.appendChild(divStrong);
        div.appendChild(divInput);

        div.appendChild(divArchiveButton); // append archive to div

        name.value = ""; //clear the inputs 
        hall.value = "";
        ticketPrice.value = "";

        divArchiveButton.addEventListener("click", (e) => {

            if (!Number(divInput.value) || divInput.value === "") { //if the divInput is not a number or it's a text nothing happends
                return;
            }

            archiveSection.appendChild(li); //(archive section) adding the items to archive section like a list item in the ul
            liStrong.textContent = "Total amount: " + (Number(divInput.value) * Number(divStrong.textContent)).toFixed(2); //calculate and save in liStrong the total amount taken from the divInput(random number) and currently listed divStrong(12.00 in the example) element converted to number
            li.removeChild(div); //remove the information(div) from the Movies on Screen(li) section

            let liDeleteButton = validateElement("button", "Delete"); //create a new delete button
            li.appendChild(liDeleteButton); //append the new button to the li placed archive section

            liDeleteButton.addEventListener("click", (e) => {
                e.target.parentNode.parentNode.removeChild(li); //deleting the current list item: https://stackoverflow.com/questions/53268641/how-to-delete-an-li-from-list-with-javascript => You can simply use the Node method removeChild. This is assuming that the (i) tag is the target in your event. =>  target.parentNode.parentNode.removeChild(target.parentNode);
            });
        });
    });

    clearButton.addEventListener("click", (e) => { //(delete li) when clear button is pressed all of the elements in the section are removed
        archiveSection.textContent = "";
    });

    validateElement = (element, text, className, id) => { //validate each element from the input data receive
        let eachElement = document.createElement(element);

        if (text) {
            eachElement.textContent = text;
        }

        if (className) {
            eachElement.classList = className;
        }

        if (id) {
            eachElement.id = id;
        }

        return eachElement;
    }
}