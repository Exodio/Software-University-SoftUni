// function solve() {

//     let nameElementInput = document.getElementsByTagName("input")[0];
//     let buttonElement = document.getElementsByTagName("button")[0];
//     let listElement = document.getElementsByTagName("li");

//     buttonElement.addEventListener("click", () => {

//         let firstLetterName = nameElementInput.value[0].toUpperCase();
//         let firstLetterNameIndex = Number(firstLetterName.charCodeAt()) - 65;

//         let oldIndexValue = listElement[firstLetterNameIndex].innerHTML;
//         let studentName = firstLetterName + nameElementInput.value.substring(1).toLowerCase();

//         if (oldIndexValue === "") {
//             listElement[firstLetterNameIndex].innerHTML = studentName;
//         } else {
//             listElement[firstLetterNameIndex].innerHTML += `, ${studentName}`;
//         }

//         nameElementInput.value = "";
//     });
// }

function solve() {
    
  let nameElementInput = document.getElementsByTagName("input")[0];
  let buttonElement = document.getElementsByTagName("button")[0];

  let databaseObj = {};
  let index = 0;
  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    databaseObj[letter] = index;

    index++;
  }

  buttonElement.addEventListener("click", () => {
    let listElement = document.getElementsByTagName("ol")[0].children; // let listElement = document.getElementsByTagName("li");
    let currentName =
      nameElementInput.toString()[0].toUpperCase() +
      nameElementInput.value.slice(1).toLowerCase();

    let capitalLetter = currentName.value[0];
    if (databaseObj[capitalLetter] !== undefined) {
      let currentIndex = databaseObj[capitalLetter];
      let currentElement = listElement[currentIndex];

      if (currentElement.textContent !== "") {
        currentElement.textContent += ", ";
      }

      currentElement.textContent += currentName;
    }

    nameElementInput.value = "";
  });
}
