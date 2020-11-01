// function attachEvents() { // result option 1
//   let phonebookUrl = "https://phonebook-nakov.firebaseio.com/phonebook.json";
//   let loadButtonElement = document.getElementById("btnLoad");
//   let createButtonElement = document.getElementById("btnCreate");
//   let phonebookElement = document.getElementById("phonebook");

//   loadButtonElement.addEventListener("click", load);
//   createButtonElement.addEventListener("click", create);

//   function load() {
//     fetch(phonebookUrl)
//       .then((responsePromise) => responsePromise.json())
//       .then((data) => {
//         Object.keys(data).forEach((key) => {
//           let li = document.createElement("li");
//           li.textContent = `${data[key].person}: ${data[key].phone}`;

//           let deleteButtonElement = document.createElement("button");
//           deleteButtonElement.textContent = "Delete";
//           deleteButtonElement.addEventListener("click", deletePhonebook);

//           li.appendChild(deleteButtonElement);
//           phonebookElement.appendChild(li);
//         });
//       });
//   }
//   function create() {
//     let person = document.getElementById("person");
//     let phone = document.getElementById("phone");

//     fetch(phonebookUrl, {
//       method: "POST",
//       body: JSON.stringify({ person: person.value, phone: phone.value }),
//     });

//     person.value = "";
//     phone.value = "";
//   }
//   function deletePhonebook(key) {
//     let urlDeltedPhonebooks = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
//     fetch(urlDeltedPhonebooks, { method: "DELETE" });
//   }
// }
// attachEvents();
function attachEvents() {// result option 2
  //set all needed initial inputs
  let loadButtonElement = document.getElementById("btnLoad");
  let personInput = document.getElementById("person");
  let phoneInput = document.getElementById("phone");
  let createButtonElement = document.getElementById("btnCreate");
  let phonebookElement = document.getElementById("phonebook");
  //set the events and add functionality
  loadButtonElement.addEventListener("click", loadPhonebook);
  createButtonElement.addEventListener("click", createPhonebook);
  // set load button functionality
  function loadPhonebook() {
    //get the data url path
    fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
      //format the url response to json
      .then((responsePromise) => responsePromise.json())
      .then((data) => {
        Object.entries(data).forEach((data) => {
          //extract each data element
          let id = data[0];
          let person = data[1].person;
          let phone = data[1].phone;
          //create li to append new data
          let li = document.createElement("li");
          li.textContent = `${person}: ${phone}`;
          //create delete button and set attributes
          let deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.setAttribute("data-target", id);
          //append the new elements
          li.appendChild(deleteButton);
          phonebookElement.appendChild(li);
          //create delete button functionality
          deleteButton.addEventListener("click", deletePhone);
        });
      });
  }
  // set create button functionality
  function createPhonebook() {
    //get initial element values
    let person = personInput.value;
    let phone = phoneInput.value;
    //set the values to a readable format
    let valuesToJson = JSON.stringify({ person, phone });
    //add the value elements to an object
    let infoObj = {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: valuesToJson,
    };
    //check if there are any inputs
    if (person.length > 0 && phone.length > 0) {
      //get the inputs's values
      fetch("https://phonebook-nakov.firebaseio.com/phonebook.json", infoObj)
        .then((responsePromise) => responsePromise.json())
        .then(() => {
          //clear their values
          personInput.value = "";
          phoneInput.value = "";
          //proceed with realoding functionality
          loadPhonebook();
        });
    }
  }
  // set delete button fucntionality
  function deletePhone() {
    let phonebookId = this.getAttribute("data-target");
    let infoObj = {
      method: "DELETE",
    };

    fetch(
      `https://phonebook-nakov.firebaseio.com/phonebook/${phonebookId}.json`,
      infoObj
    ).then(loadPhonebook());
  }
}

attachEvents();
