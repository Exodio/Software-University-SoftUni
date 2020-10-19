function solve() {

    let taskInput = document.querySelector("#task"); //0 based section and its elements
    let descriptionInput = document.querySelector("#description");
    let dateInput = document.querySelector("#date");
    let buttonAdd = document.querySelector("#add");

    let sections = document.querySelectorAll("section");
    let openDivSection = sections.item(1).querySelectorAll("div").item(1); //1st section
    let progressDivSection = sections.item(2).querySelectorAll("div").item(1); //2nd section
    let completeDivSection = sections.item(3).querySelectorAll("div").item(1); //3rd section


    buttonAdd.addEventListener("click", (e) => {
        e.preventDefault(); //we prevent windows reloading

        let task = taskInput.value; //we review the input values
        let description = descriptionInput.value;
        let date = dateInput.value;

        if (task !== "" && description !== "" && date !== "") { //if we have inputs we place them accordingly
            let article = document.createElement("article");

            let h3 = validateElements("h3", task); //we review the data and we place it in the (according section, with the according input data)
            article.appendChild(h3);

            let p = validateElements("p", `Description: ${description}`);
            article.appendChild(p);

            let p1 = validateElements("p", `Due Date: ${date}`);
            article.appendChild(p1);


            let div = validateElements("div", "", "flex");
            article.appendChild(div);

            let buttonStart = validateElements("button", "Start", "green");
            div.appendChild(buttonStart);

            let buttonDelete = validateElements("button", "Delete", "red");
            div.appendChild(buttonDelete);

            openDivSection.appendChild(article); //we save the received data 1st open source section

            let buttonFinish = validateElements("button", "Finish", "orange");

            buttonStart.addEventListener("click", () => {
                progressDivSection.appendChild(article); //we add the data to the next section's buton
                div.appendChild(buttonFinish); // we end the received data to our end button 
                buttonStart.remove(); //we remove the data from our current button
            });

            buttonDelete.addEventListener("click", () => {
                article.remove();
            });

            buttonFinish.addEventListener("click", () => {
                completeDivSection.appendChild(article);
                div.remove(); //we remove the buttons with their parent div-elements
            });
        }
    });

    validateElements = (element, text, className, id) => { //sets the elements of each section
        let createElement = document.createElement(element); //creates element

        if (text) {
            createElement.textContent = text; //adds a textContent
        }

        if (className) {
            createElement.className = className; //adds a className
        }

        if (id) {
            createElement.id = id; //adds an id
        }

        return createElement;
    }
}