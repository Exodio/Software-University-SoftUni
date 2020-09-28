function solve() {

  let input = document.getElementById("input");
  let output = document.getElementById("output");

  let text = input.innerHTML.split(".");

  for (let i = 0; i < text.length; i += 3) {
    let textArr = text.slice(i, i + 2).join(".");

    let paragraph = document.createElement("p");
    paragraph.innerHTML = textArr + ".";

    output.appendChild(paragraph);
  }
}