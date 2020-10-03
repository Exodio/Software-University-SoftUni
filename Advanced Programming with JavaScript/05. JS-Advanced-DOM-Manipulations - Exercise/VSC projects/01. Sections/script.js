function create(words) {

   let contentElement = document.getElementById("content");

   for (const section of words) {
      let newDivElement = document.createElement("div");
      contentElement.appendChild(newDivElement);

      let newParagraphElement = document.createElement("p");
      newDivElement.appendChild(newParagraphElement);

      newParagraphElement.textContent = section;
      newParagraphElement.style.display = "none";

      newDivElement.addEventListener("click", () => {
         newParagraphElement.style.display = "block";
      });
   }
}