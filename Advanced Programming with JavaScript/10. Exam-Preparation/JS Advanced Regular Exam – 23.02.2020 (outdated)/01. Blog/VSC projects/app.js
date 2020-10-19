function solve() {

   let articleSectionElement = document.getElementsByTagName("section")[1]; //articles

   let authorInputElement = document.getElementsByTagName("input")[0]; //author
   let titleInputElement = document.getElementsByTagName("input")[1]; //title
   let categoryInputElement = document.getElementsByTagName("input")[2]; //category
   let contentInputElement = document.getElementById("content"); //content

   let buttonCreateElement = document.getElementsByTagName("button")[0]; //create button

   let archiveListElement = document.getElementsByTagName("ul")[0]; //archive list 

   buttonCreateElement.addEventListener("click", (e) => {
      e.preventDefault(); //stops reloading 

      let article = document.createElement("article"); //Articles
      articleSectionElement.appendChild(article);
      let h1 = document.createElement("h1"); //JavaScript
      h1.textContent = titleInputElement.value; //title
      article.appendChild(h1);

      let p = document.createElement("p"); //Category
      p.textContent = "Category:";
      article.appendChild(p);
      let strong = document.createElement("strong"); //Programming
      strong.textContent = categoryInputElement.value; //category
      p.appendChild(strong);

      p1 = document.createElement("p"); //Creator
      p1.textContent = "Creator:";
      article.appendChild(p1);
      let strong1 = document.createElement("strong"); //John
      strong1.textContent = authorInputElement.value; //author
      p1.appendChild(strong1);

      p2 = document.createElement("p"); //Lorem ipsum dolor sit...
      p2.textContent = contentInputElement.value; //content
      article.appendChild(p2);


      let div = document.createElement("div"); //create placing for buttons
      div.className = "buttons";
      article.appendChild(div);

      let deleteButton = document.createElement("button"); //create delete button
      deleteButton.textContent = "Delete";
      deleteButton.className = "btndelete";
      div.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
         article.remove(); //removing only the title of the article
      });

      let archiveButton = document.createElement("button"); //create archive button
      archiveButton.textContent = "Archive";
      archiveButton.className = "btnarchive";
      div.appendChild(archiveButton);

      archiveButton.addEventListener("click", () => {
         let li = document.createElement("li"); //the location in which the article will be move in the ul(archive) section
         li.textContent = h1.textContent;
         archiveListElement.appendChild(li); //we append the archived title

         sortByTitle(archiveListElement); //archive section sorted by title (function below)
         article.remove(); //removing only the title of the article


         function sortByTitle(ul) { //sorting ul function
            Array.from(ul.children)
               .sort((a, b) => a.textContent.localeCompare(b.textContent)) //title sorting
               .forEach(li => ul.appendChild(li));
         }
      });
   });
}