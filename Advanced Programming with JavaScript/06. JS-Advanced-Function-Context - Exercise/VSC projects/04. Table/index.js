// function solve() {

//    tableRowElements = Array.from(document.querySelector("tbody").children); //("body > table > tbody") [..(document.querySelector("tbody").children)];
//    tableRowElements.map(row => row.addEventListener("click", function () {

//       if (this.hasAttribute("style")) {
//          this.removeAttribute("style"); //if the style is being used we remove it
//       } else {
//          tableRowElements.map(row => row.removeAttribute("style")); //if there is no style we remove the current style
//          this.style.backgroundColor = "#413f5e"; //and we attach the new one
//       }
//    }));
// }

function solve() {

   tableRowElements = document.getElementsByTagName("tr");
   let lastClicked;

   Array.from(tableRowElements).forEach(row => row.addEventListener("click", function (e) {

      if (e.target.parentNode.style.backgroundColor === "" || e.target.parentNode.style.backgroundColor === undefined) {
         e.target.parentNode.style.backgroundColor === "#413f5e";

         if (lastClicked) { // if it is different then undefined
            lastClicked.backgroundColor = "";
         }
      } else {
         e.target.parentNode.style.backgroundColor === "";
      }

      lastClicked = e.target.parentNode.style.backgroundColor;
   }));
}