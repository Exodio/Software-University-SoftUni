// function solve() {

//   let inputElement = document.getElementById("input");
//   let outputElement = document.getElementById("output");

//   let textInput = inputElement.innerHTML.split(".");

//   for (let i = 0; i < textInput.length; i += 3) {
//     let textArr = text.slice(i, i + 2).join(".");

//     let paragraphElement = document.createElement("p");
//     paragraphElement.innerHTML = textArr + ".";

//     outputElement.appendChild(paragraphElement);
//   }
// }

function solve() {
  let inputElement = document.getElementById("input").innerText;
  let outputElement = document.getElementById("output");
  let sentences = inputElement.split(".");

  while (sentences.length > 0) {
    let currentParagraph = sentences.splice(0, 3).join(".") + ".";

    let paragraphElement = document.createElement("p");
    paragraphElement.innerText = currentParagraph;

    outputElement.appendChild(paragraphElement);
  }
}
