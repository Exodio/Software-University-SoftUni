function solve() {
  //1 GET INPUTS AND VALIDATE DATA
  let openSection = document.getElementsByTagName("section")[1]; //4
  let inProgressSection = document.getElementsByTagName("section")[2]; //7
  let completeSection = document.getElementsByTagName("section")[3]; //8

  let addButton = document.getElementById("add"); //1
  addButton.addEventListener("click", (e) => {//2 MAKE AND ADD BUTTON AND ATTACH THE REST OF THE FUNCTIONS AFTER IT IS PRESSED
    e.preventDefault(); //2 prevents the form from being send (prevents reloading)

    let task = document.getElementById("task"); //1
    let description = document.getElementById("description"); //1
    let date = document.getElementById("date"); //1
    //console.log();
    if (task.value === "" || description.value === "" || date.value === "") {
      //3 SPECIFY WHEN THE PROGRESS CONTINUES
      return;
    }
    //4 CREATE NEW ELEMENTS
    let article = document.createElement("article"); //4

    let h3 = document.createElement("h3"); //4
    h3.textContent = task.value; //or use innerText

    let pDescription = document.createElement("p"); //4
    pDescription.textContent = `Description: ${description.value}`;

    let pDate = document.createElement("p"); //4
    pDate.textContent = `Due Date: ${date.value}`;

    let div = document.createElement("div");//4
    div.className = "flex";

    let buttonStart = document.createElement("button");//4
    buttonStart.className = "green";
    buttonStart.textContent = "Start";

    let buttonDelete = document.createElement("button"); //4
    buttonDelete.className = "red";
    buttonDelete.textContent = "Delete";

    buttonStart.addEventListener("click", (e) => { //6 ATTACH THE REQUIRED BUTTONS
      let buttonFinish = document.createElement("button"); //8
      buttonFinish.className = "orange"; //8
      buttonFinish.textContent = "Finish"; //8

      buttonFinish.addEventListener("click", (e) => {
        //8 ATTACH THE FINISH BUTTON
        article.lastElementChild.remove();
        completeSection.lastElementChild.appendChild(article);
      });

      article.lastElementChild.children[0].remove(); //7 we remove the start button and the delete is moved on its own to the first empty index
      article.lastElementChild.appendChild(buttonFinish); //7 we append the new finish button on the now freed index, where the delete button was placed
      inProgressSection.lastElementChild.appendChild(article); //7
    });

    buttonDelete.addEventListener("click", deleteArticle); //

    article.appendChild(h3); //5 APPEND THE NEW ELEMENTS
    article.appendChild(pDescription); //5
    article.appendChild(pDate); //5
    article.appendChild(div); //5
    div.appendChild(buttonStart); //5
    div.appendChild(buttonDelete); //5

    openSection.lastElementChild.appendChild(article); //4

    task.value = ""; //4
    description.value = ""; //4
    date.value = ""; //4
  });
  //5 CREATE OUTER FUNCTION FOR EVENT BUTTON DELETION
  function deleteArticle(e) {
    e.target.parentElement.parentElement.remove(); //5 we get our entire article and remove it once delete button is pressed
  }
}
