function solve() {

   let wordElement = document.getElementById("searchField");
   let searchButtonElement = document.getElementById("searchBtn");
   searchButtonElement.addEventListener("click", () => {
      let tableRowsSelector = Array.from(document.querySelectorAll("tbody > tr")); // all table rows in my table body //or [...(document.querySelectorAll("tbody > tr"))];
      tableRowsSelector.forEach(row => {

         if (row.textContent.includes(wordElement.value)) {
            row.className = "select"; //Each element of class, selects the background with the included CSS //or option row.classList.add("select");
         } else {
            row.className = ""; //or option(removes the entire class) row.classList.remove("select");
         }
      });

      wordElement.value = "";
   });
}