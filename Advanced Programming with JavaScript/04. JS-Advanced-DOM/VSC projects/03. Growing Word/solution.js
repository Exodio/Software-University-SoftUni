// function growingWord() {

//   let word = document.querySelector("#exercise > p");
//   let pxSize = 2;

//   let colorChanger = {
//     "blue": "green",
//     "green": "red",
//     "red": "blue",
//   };

//   if (!word.hasAttribute("style")) {
//     word.setAttribute("style", `color:blue; font-size: ${pxSize}px`);
//   } else {
//     let currColor = word.style.color;
//     let currPxSize = word.style["font-size"];
//     pxSize = currPxSize.substring(0, currPxSize.length - 2) * 2;

//     word.setAttribute("style",
//       `color:${colorChanger[currColor]}; font-size: ${pxSize}px`)
//   }
// }

// function growingWord() {

//   let text = document.querySelector("#exercise > p");
//   text.style.fontSize = newSize();
//   text.style.color = newColor();

//   function newColor() {

//     let currentColor = text.style.color;
//     let colorChanger = {
//       "blue": "green",
//       "green": "red",
//       "red": "blue",
//     };

//     return colorChanger[currentColor];
//   }

//   function newSize() {

//     let currSize = text.style.fontSize;
//     let newSize = "";

//     if (currSize === "") {
//       newSize = 2;
//     } else {
//       newSize = size.match(/\d+/g);
//       newSize *= 2;
//     }

//     return newSize + "px";
//   }
// }

function growingWord() {

    let growingWordParentElement = document.getElementById("exercise");
    let growingWordElement = growingWordParentElement.lastElementChild;
    let colorElement = document.getElementById("colors");

    if (!growingWordElement.style.fontSize) {
        growingWordElement.style.fontSize = "2px";
    } else {
        growingWordElement.style.fontSize = parseInt(growingWordElement.style.fontSize) * 2 + "px";
    }

    let firstColorElement = colorElement.firstElementChild;
    let color = colorElement.firstElementChild.innerHTML.toLowerCase();
    growingWordElement.style.color = color;

    colorElement.appendChild(firstColorElement);
}