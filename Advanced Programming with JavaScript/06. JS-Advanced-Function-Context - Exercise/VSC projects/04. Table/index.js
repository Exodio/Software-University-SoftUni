function solve() {

   tableRowElements = Array.from(document.querySelector("tbody").children); //("body > table > tbody") [..(document.querySelector("tbody").children)];
   tableRowElements.map(row => row.addEventListener("click", function () {

      if (this.hasAttribute("style")) {
         this.removeAttribute("style"); //if the style is being used we remove it
      } else {
         tableRowElements.map(row => row.removeAttribute("style")); //if there is no style we remove the current style
         this.style.backgroundColor = "#413f5e"; //and we attach the new one
      }
   }));
}