function solve() {

    let buttonAdd = document.querySelector("#container button"); //take the button in the container section with name button, you can use getElementByTagName
    let inputSection = document.querySelectorAll("#container input"); //get all the elements inputs of the container
    let inputs = Array.from(inputSection); //Converting an HTML collection into an array IN JUDGE IT WILL BE NEEDED
    let [nameInput, ageInput, kindInput, ownerInput] = inputs; //we take each element with spread opperator from the array of inputs in order to use them individually

    let adoptionSection = document.querySelector("#adoption ul"); //take all of the adoption ul elements
    let adoptedSection = document.querySelector("#adopted ul"); //take all of the adopted ul elements

    buttonAdd.addEventListener("click", (e) => {
        //first click function
        //we want to take the the input data once the button is clicked
        e.preventDefault();

        if (!inputs.every((x) => x.value)) {
            //we check if every element has a value different than ""
            //console.log("Not full inputs added"); //check
            return;
        }

        if (!Number(ageInput.value)) {
            //check if the age input is a Number value, alternative isNaN(Number(ageInput.age));
            return;
        }

        let li = document.createElement("li"); //we create a new li element
        let p = document.createElement("p"); //we create new p element
        let span = document.createElement("span"); //we create new span element
        let contactButton = document.createElement("button"); //we create new button element

        p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
        span.textContent = `Owner: ${ownerInput.value}`; // we add the owner input to the span element
        contactButton.textContent = "Contact with owner"; //we add the text to the contact button

        li.appendChild(p); //we append the p to the li
        li.appendChild(span); //we append the span element once we have the valid input from above and we attach it to the adoption section
        li.appendChild(contactButton); //we append the button element to the li of the adoption section
        adoptionSection.appendChild(li); //we append the li to the next section from the input

        nameInput.value = ""; // we clear each value of the inputs
        ageInput.value = "";
        kindInput.value = "";
        ownerInput.value = "";

        contactButton.addEventListener("click", (e) => {
            //second click function
            let liParentElement = e.currentTarget.parentElement; //we take the button which exactly we have clicked, which in our case is the li
            e.currentTarget.remove(); //we remove the current button element

            let div = document.createElement("div"); //we create the new elements
            let input = document.createElement("input");
            let takeItButton = document.createElement("button");

            input.setAttribute("placeholder", "Enter your names"); //we set a new attribute with the name: placeholder, and the following text
            takeItButton.textContent = "Yes! I take it!"; // once the button is clicked the text on it changes

            div.appendChild(input); //append the input to the div
            div.appendChild(takeItButton); //append the div into the take button
            liParentElement.appendChild(div); //we took the parrent in the beginning in order to append the new div

            takeItButton.addEventListener("click", (e) => {
                let entireLiElement = e.currentTarget.parentElement.parentElement; //we take the button which exactly we have clicked, which in our case is the li and we take the inner new div li"s data
                let parentButtonEl = e.currentTarget.parentElement; //we remove the previous saved button element
                let newOwnerInputElement = entireLiElement.querySelector("input"); //takes the text for the owner's name
                let ownerNameSpanElement = entireLiElement.querySelector("span"); //takes the text for the new owner's name

                let newOwnerName = newOwnerInputElement.value; //changes the new span of the owner element with the new text

                if (!newOwnerName) { //if there is no owner name input
                    return;
                }

                ownerNameSpanElement.textContent = `New Owner: ${newOwnerName}`; //we set the new owner's name

                adoptedSection.appendChild(entireLiElement); //we append the li element with all the previous data to the last adopted section, this will automatically move the ul data without the necessity to delete anything!
                parentButtonEl.remove(); //we remove the previous saved button element

                let checkedButtonElement = document.createElement("button"); //we create the checked button element
                checkedButtonElement.textContent = "Checked"; //we set it's text

                entireLiElement.appendChild(checkedButtonElement); //we append it to our main li element

                checkedButtonElement.addEventListener("click", (e) => {
                    e.currentTarget.parentElement.remove(); //we delete the current item listed (li)(selected) element or we can use parentButtonEl.remove();
                });
            });
        });
    });
}