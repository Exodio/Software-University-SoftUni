function attachEvents() { //exercise result 1
    //get the button inputs
    const addButtonElement = document.querySelector("button.add");
    const loadButtonElement = document.querySelector("button.load");

    const catchesElement = document.getElementById("catches");
    const inputAnglerElement = document.querySelector("fieldset > input.angler");
    const inputWeightElement = document.querySelector("fieldset > input.weight");
    const inputSpeciesElement = document.querySelector("fieldset > input.species");
    const inputLocationElement = document.querySelector("fieldset > input.location");
    const inputBaitElement = document.querySelector("fieldset > input.bait");
    const inputCaptureTimeElement = document.querySelector("fieldset > input.captureTime");

    //add buttons functionality
    addButtonElement.addEventListener("click", createCache);
    loadButtonElement.addEventListener("click", function loadCache() {
        //list all special key catches
        fetch("https://fisher-game.firebaseio.com/catches.json")
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(key => {
                    createElements(data[key], key);
                });
            });
    });

    function createCache() {
        //create new catch with a JSON request body
        let requestBodyObj = {
            angler: inputAnglerElement.value,
            weight: inputWeightElement.value,
            species: inputSpeciesElement.value,
            location: inputLocationElement.value,
            bait: inputBaitElement.value,
            captureTime: inputCaptureTimeElement.value,
        };
        let requestToJson = JSON.stringify(requestBodyObj);
        //create a post request in order to get special key(catches)
        fetch("https://fisher-game.firebaseio.com/catches.json", {
            method: "POST",
            body: requestToJson,
        });
    }

    function createElements(data, id) {
        //set each key element and append it
        let div = document.createElement("div");
        div.setAttribute("class", "catch");
        div.setAttribute("data-id", `${id}`);
        div.innerHTML = ` <label>Angler</label>
        <input type="text" class="angler" value="${data.angler}">
        <hr>
        <label>Weight</label>
        <input type="number" class="weight" value="${data.weight}">
        <hr>
        <label>Species</label>
        <input type="text" class="species" value="${data.species}">
        <hr>
        <label>Location</label>
        <input type="text" class="location" value="${data.location}">
        <hr>
        <label>Bait</label>
        <input type="text" class="bait" value="${data.bait}">
        <hr>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${data.captureTime}">
        <hr>`;
        //set the additional buttons and functionality
        const updateButtonElement = document.createElement("button");
        updateButtonElement.setAttribute("class", "update");
        updateButtonElement.textContent = "Update";
        div.appendChild(updateButtonElement);

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.setAttribute("class", "delete");
        deleteButtonElement.textContent = "Delete";
        div.appendChild(deleteButtonElement);
        //append the new elements and their data to the cache section
        catchesElement.appendChild(div);

        updateButtonElement.addEventListener("click", (e) => updateCache(e, id));
        deleteButtonElement.addEventListener("click", (e) => deleteCache(e, id));
    }

    function updateCache(e, id) {
        let dataBodyObj = {
            angler: e.target.parentElement.querySelector(".angler").value,
            weight: e.target.parentElement.querySelector(".weight").value,
            species: e.target.parentElement.querySelector(".species").value,
            location: e.target.parentElement.querySelector(".location").value,
            bait: e.target.parentElement.querySelector(".bait").value,
            captureTime: e.target.parentElement.querySelector(".captureTime").value,
        };
        let dataBodyObjToJson = JSON.stringify(dataBodyObj);

        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: "PUT",
            body: dataBodyObjToJson,
        });
    }

    function deleteCache(e, id) {
        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: "DELETE"
        });
        e.target.parentElement.remove();
    }
}

attachEvents();

// function attachEvents() {//exercise result 2
//     get the needed inputs
//   const addButtonElement = document.querySelector("button.add");
//   const loadButtonElement = document.querySelector("button.load");
//   const catchesElement = document.getElementById("catches");
//     set url's
//   const baseURL = "https://fisher-game.firebaseio.com/catches.json";
//   const partialBaseURL = "https://fisher-game.firebaseio.com/catches/";
//     get the add elements
//   addButtonElement.addEventListener("click", () => {
//     let angler = document.querySelector("fieldset > input.angler");
//     let weight = document.querySelector("fieldset > input.weight");
//     let species = document.querySelector("fieldset > input.species");
//     let location = document.querySelector("fieldset > input.location");
//     let bait = document.querySelector("fieldset > input.bait");
//     let captureTime = document.querySelector("fieldset > input.captureTime");
//     set the elements into obj
//     let obj = JSON.stringify({
//       angler: angler.value,
//       weight: weight.value,
//       species: species.value,
//       location: location.value,
//       bait: bait.value,
//       captureTime: captureTime.value,
//     });
//     add them into a post promise
//     fetch(baseURL, {
//       method: "POST",
//       body: obj,
//     });
//   });
//     set the load button
//   loadButtonElement.addEventListener("click", () => {
//     fetch(baseURL)
//       .then((response) => response.json())
//       .then((data) => {
//         go through each key in the {{}}'s
//         Object
//         .keys(data)
//         .forEach((key) => appendCatch(key, data));
//       });
//   });
//    create and append elements functionality
//   function appendCatch(key, data) {
//       desr. each key element
//     let { angler, weight, species, location, bait, captureTime } = data[key];
//     create div into which the elements will be added
//     let catchDiv = createElement("div", "catch", "");
//     set attributes to the main element
//     catchDiv.setAttribute("data-id", key);

//     let anglerLabel = createElement("label", "", "Angler");
//     let anglerInput = createElement("input", "angler", angler, "text");

//     let weightLabel = createElement("label", "", "Weight");
//     let weightInput = createElement("input", "weight", weight, "number");

//     let speciesLabel = createElement("label", "", "Species");
//     let speciesInput = createElement("input", "species", species, "text");

//     let locationLabel = createElement("label", "", "Location");
//     let locationInput = createElement("input", "location", location, "text");

//     let baitLabel = createElement("label", "", "Bait");
//     let baitInput = createElement("input", "bait", bait, "text");

//     let captureTimeLabel = createElement("label", "", "Capture Time");
//     let captureTimeInput = createElement("input", "captureTime", captureTime, "number");
//     add additional buttons functionality
//     let updateButton = createElement("button", "update", "Update");
//     let deleteButton = createElement("button", "delete", "Delete");
//     set update button 
//     updateButton.addEventListener("click", () => {
//     get the values accordingly from the input fields by reference
//       let obj = JSON.stringify({
//         angler: anglerInput.value,
//         weight: weightInput.value,
//         species: speciesInput.value,
//         location: locationInput.value,
//         bait: baitInput.value,
//         captureTime: captureTimeInput.value,
//       });

//       let updateURL = partialBaseURL + key + ".json";
//       fetch(updateURL, {
//         method: "PUT",
//         body: obj,
//       });
//     });
//     set delete button 
//     deleteButton.addEventListener("click", () => {
//       let deleteURL = partialBaseURL + key + ".json";
//       fetch(deleteURL, {
//         method: "DELETE",
//       });
//     });
//     append all the created elements to the parent
//     catchDiv.appendChild(anglerLabel);
//     catchDiv.appendChild(anglerInput);
//     catchDiv.appendChild(document.createElement("hr"));

//     catchDiv.appendChild(weightLabel);
//     catchDiv.appendChild(weightInput);
//     catchDiv.appendChild(document.createElement("hr"));

//     catchDiv.appendChild(speciesLabel);
//     catchDiv.appendChild(speciesInput);
//     catchDiv.appendChild(document.createElement("hr"));

//     catchDiv.appendChild(locationLabel);
//     catchDiv.appendChild(locationInput);
//     catchDiv.appendChild(document.createElement("hr"));

//     catchDiv.appendChild(baitLabel);
//     catchDiv.appendChild(baitInput);
//     catchDiv.appendChild(document.createElement("hr"));

//     catchDiv.appendChild(captureTimeLabel);
//     catchDiv.appendChild(captureTimeInput);
//     catchDiv.appendChild(document.createElement("hr"));

//     catchDiv.appendChild(updateButton);
//     catchDiv.appendChild(deleteButton);
//     append the parend child to the parent
//     catchesElement.appendChild(catchDiv);
//   }

//   function createElement(el, className, textContent, type) {
//     validate each created element through a function
//     let element = document.createElement(el);

//     if (el === "input") {
//       element.type = type;
//       element.value = textContent;
//     } else {
//       element.innerHTML = textContent;
//     }
//     element.className = className;

//     return element;
//   }
// }

// attachEvents();
