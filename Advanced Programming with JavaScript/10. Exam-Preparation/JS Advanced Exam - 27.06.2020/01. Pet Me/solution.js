function solve() { //solution 1 => querrySelector/.children/ element validator function for each element/innerHTML/ e.target;
    //01. Get all inputs
    let allInputs = document.querySelectorAll("input[type='text']"); //we receive a nodeList() of all inputs;
    let addButton = document.querySelector("button"); //we specify the button element 
    let allSections = document.querySelectorAll("section"); //we select and get all section
    //02. Select each section
    let adoptionSection = allSections[0]; // we specify each section
    let ulAdoption = adoptionSection.children[1]; // and its child ul in which elements will be added
    let adoptedSection = allSections[1];
    let ulAdopted = adoptedSection.children[1];
    //03. Select each input
    let name = allInputs[0];
    let age = allInputs[1];
    let kind = allInputs[2];
    let currentOwner = allInputs[3];
    //04. Insert first button
    addButton.addEventListener("click", (e) => {
        //05. Prevent the site from reloading
        e.preventDefault();
        //06. Check if all inputs are valid in order to proceed, if not return
        if (name.value === "" || age.value === "" || kind.value === "" || currentOwner === "") {
            return;
        }
        //07. Check if the age value is a number in order to proceed, if not return
        if (!Number(age.value)) {
            return;
        }
        //08. Create the inner elements to which the data will be added
        let li = document.createElement("li");
        let p = document.createElement("ul");
        //09. Create function for validation of each element line in order to be added easier (function listed below!)
        //10. Pre- validate and create new elements, if validation has passed each new appending element
        let strong1 = elementValidation("strong", name.value);
        let strong2 = elementValidation("strong", age.value);
        let strong3 = elementValidation("strong", kind.value);
        let span = elementValidation("span", `Owner: ${currentOwner.value}`);
        let contactOwnerButton = elementValidation("button", "Contact with owner"); //10.1-> Create the next button
        //11. Append all new elements, post validation
        li.appendChild(p);
        p.appendChild(strong1);
        p.innerHTML += " is a "; //!adds an inner HTML element in between the paragraph, check document for example
        p.appendChild(strong2);
        p.innerHTML += " year old "; //!adds an inner HTML element in between the paragraph, check document for example
        p.appendChild(strong3);
        li.appendChild(span);
        li.appendChild(contactOwnerButton);
        ulAdoption.appendChild(li); //!adds the created li in the end to the new next section
        //12. Clear our all inputs
        name.value = "";
        age.value = "";
        kind.value = "";
        currentOwner.value = "";
        //13. Add the new contact owner button
        contactOwnerButton.addEventListener("click", (e) => {
            //14. Create new elements according the the new button requirements
            let div = document.createElement("div");
            let input = document.createElement("input");
            input.placeholder = "Enter your names"; //add a placeholder the the input element in the div
            let iTakeItButton = elementValidation("button", "Yes! I take it!"); //14.1-> Create the next button
            //15. Append all new elements
            div.appendChild(input);
            div.appendChild(iTakeItButton);
            li.appendChild(div); //!adds the created div to the initial li section
            //15.1 => !Remove the previous button element(contactOwnerButton) as we add the new following one(iTakeItButton)
            e.target.remove();
            //16. Add the new Yes! I take it button
            iTakeItButton.addEventListener("click", (e) => {
                //17. Check, if there is any input in the placeholder section and continue forward only, if there are any valid insertions
                if (input.value !== "") {
                    //18. Validate the new elements     
                    let newOwnerSpan = elementValidation("span", `New Owner: ${input.value}`);
                    let checkedButton = elementValidation("button", "Checked");
                    //19. Takes the elements located next to the button (iTakeItButton) which is the li containing the placeholder
                    let adoptionParentDiv = e.target.parentElement;
                    //20. Takes out the data located in the parent of the li container placeholder, which is the entire li (the name of the pet as well as the new owner name)
                    let adoptedParentLi = adoptionParentDiv.parentElement;
                    //21. Removes the placeholder element, the i take it button
                    adoptionParentDiv.removeChild(input);
                    adoptionParentDiv.removeChild(iTakeItButton);
                    //22. Removes the button container and the initial span(which is the previous owner's name)
                    adoptedParentLi.removeChild(adoptionParentDiv);
                    adoptedParentLi.removeChild(span);
                    //23. Adds the new span in the place of the previous span, adds the new button(Checked)
                    adoptedParentLi.appendChild(newOwnerSpan);
                    adoptedParentLi.appendChild(checkedButton);
                    ulAdopted.appendChild(adoptedParentLi); //!And appends all of the new information (new li elements and insetions) to the ulAdopted section
                    //23.1 => !Than it removes the entire section
                    e.target.remove();
                    //24. Creates the last Checked button
                    checkedButton.addEventListener("click", (e) => {
                        //25. Removes all of the elements in the section
                        adoptedParentLi.remove();
                    });
                }
            });
        });
    });

    function elementValidation(element, text, className, id) { //09. Verification function for each element 
        let currentElement = document.createElement(element);

        if (text) {
            currentElement.textContent = text;
        }
        if (className) {
            currentElement.classList = className;
        }
        if (id) {
            currentElement.id = id;
        }
        return currentElement;
    }
}

// function solve() { //solution 2

//     let buttonAdd = document.querySelector("#container button"); //take the button in the container section with name button, you can use getElementByTagName
//     let inputSection = document.querySelectorAll("#container input"); //get all the elements inputs of the container
//     let inputs = Array.from(inputSection); //Converting an HTML collection into an array IN JUDGE IT WILL BE NEEDED
//     let [nameInput, ageInput, kindInput, ownerInput] = inputs; //we take each element with spread opperator from the array of inputs in order to use them individually

//     let adoptionSection = document.querySelector("#adoption ul"); //take all of the adoption ul elements
//     let adoptedSection = document.querySelector("#adopted ul"); //take all of the adopted ul elements

//     buttonAdd.addEventListener("click", (e) => {
//         //first click function
//         //we want to take the the input data once the button is clicked
//         e.preventDefault();

//         if (!inputs.every((x) => x.value)) {
//             //we check if every element has a value different than ""
//             //console.log("Not full inputs added"); //check
//             return;
//         }

//         if (!Number(ageInput.value)) {
//             //check if the age input is a Number value, alternative isNaN(Number(ageInput.age));
//             return;
//         }

//         let li = document.createElement("li"); //we create a new li element
//         let p = document.createElement("p"); //we create new p element
//         let span = document.createElement("span"); //we create new span element
//         let contactButton = document.createElement("button"); //we create new button element

//         p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
//         span.textContent = `Owner: ${ownerInput.value}`; // we add the owner input to the span element
//         contactButton.textContent = "Contact with owner"; //we add the text to the contact button

//         li.appendChild(p); //we append the p to the li
//         li.appendChild(span); //we append the span element once we have the valid input from above and we attach it to the adoption section
//         li.appendChild(contactButton); //we append the button element to the li of the adoption section
//         adoptionSection.appendChild(li); //we append the li to the next section from the input

//         nameInput.value = ""; // we clear each value of the inputs
//         ageInput.value = "";
//         kindInput.value = "";
//         ownerInput.value = "";

//         contactButton.addEventListener("click", (e) => {
//             //second click function
//             let liParentElement = e.currentTarget.parentElement; //we take the button which exactly we have clicked, which in our case is the li
//             e.currentTarget.remove(); //we remove the current button element

//             let div = document.createElement("div"); //we create the new elements
//             let input = document.createElement("input");
//             let takeItButton = document.createElement("button");

//             input.setAttribute("placeholder", "Enter your names"); //we set a new attribute with the name: placeholder, and the following text
//             takeItButton.textContent = "Yes! I take it!"; // once the button is clicked the text on it changes

//             div.appendChild(input); //append the input to the div
//             div.appendChild(takeItButton); //append the div into the take button
//             liParentElement.appendChild(div); //we took the parrent in the beginning in order to append the new div

//             takeItButton.addEventListener("click", (e) => {
//                 let entireLiElement = e.currentTarget.parentElement.parentElement; //we take the button which exactly we have clicked, which in our case is the li and we take the inner new div li"s data
//                 let parentButtonEl = e.currentTarget.parentElement; //we remove the previous saved button element
//                 let newOwnerInputElement = entireLiElement.querySelector("input"); //takes the text for the owner's name
//                 let ownerNameSpanElement = entireLiElement.querySelector("span"); //takes the text for the new owner's name

//                 let newOwnerName = newOwnerInputElement.value; //changes the new span of the owner element with the new text

//                 if (!newOwnerName) { //if there is no owner name input
//                     return;
//                 }

//                 ownerNameSpanElement.textContent = `New Owner: ${newOwnerName}`; //we set the new owner's name

//                 adoptedSection.appendChild(entireLiElement); //we append the li element with all the previous data to the last adopted section, this will automatically move the ul data without the necessity to delete anything!
//                 parentButtonEl.remove(); //we remove the previous saved button element

//                 let checkedButtonElement = document.createElement("button"); //we create the checked button element
//                 checkedButtonElement.textContent = "Checked"; //we set it's text

//                 entireLiElement.appendChild(checkedButtonElement); //we append it to our main li element

//                 checkedButtonElement.addEventListener("click", (e) => {
//                     e.currentTarget.parentElement.remove(); //we delete the current item listed (li)(selected) element or we can use parentButtonEl.remove();
//                 });
//             });
//         });
//     });
// }
