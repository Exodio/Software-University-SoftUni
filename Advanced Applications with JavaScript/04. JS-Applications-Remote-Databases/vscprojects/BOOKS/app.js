//import the requests
import * as requests from "./requests.js";
//create an IIFE in order to not polute the global scope
(function () {
  //list the needed dom elements in an object
  const booksCollection = {
    loadAllBooksButtonElement: document.getElementById("loadBooks"),
    booksContainerElement: document.querySelector("tbody"),

    titleInputElement: document.getElementById("title"),
    authorInputElement: document.getElementById("author"),
    isbnInputElement: document.getElementById("isbn"),
    tagsInputElement: document.getElementById("tags"),
    submitButtonElement: document.querySelector("form button"),

  };
  //add click handler functionality for the two main buttons
  booksCollection.loadAllBooksButtonElement.addEventListener("click", loadAllBooks);
  booksCollection.submitButtonElement.addEventListener("click", submitBook);

  function submitBook(e) {
    e.preventDefault();
    //take the inputs params
    let title = booksCollection.titleInputElement.value;
    let author = booksCollection.authorInputElement.value;
    let isbn = booksCollection.isbnInputElement.value;
    let tags = booksCollection.tagsInputElement.value;
    //check if all params are available
    if (!title || !author || !isbn || !tags) {
      return;
    }
    //clear the input fields 
    booksCollection.titleInputElement.value = "";
    booksCollection.authorInputElement.value = "";
    booksCollection.isbnInputElement.value = "";
    booksCollection.tagsInputElement.value = "";
    //list the submitted params into an object
    let newBookData = {
      title,
      author,
      isbn,
      tags,
    };
    //validate new book request and check for errors
    requests
      .submitNewBook(newBookData)
      .catch(errorHandler);
  }

  function loadAllBooks() {
    //clear the body of the listed information pre-loading
    booksCollection.booksContainerElement.innerHTML = "";
    //validate the current listed books request and check for errors
    requests
      .getAllBooks()
      .then((data) => {
        //check if there are listed books(data)
        if (!data) {
          throw new Error("There are no books listed in the database container!");
        }
        //else loop through the books(data)
        for (const [id, bookInfo] of Object.entries(data)) {
          //create tr element
          let trData = createElement("tr");
          //set the data id key
          trData.setAttribute("data-id", id);
          //create the td of the title, set its element type, list an arr of the class elements and the title name
          let TdTitle = createElement("td", [], bookInfo.title);
          //set the container to be edditable and append the element
          TdTitle.contentEditable = true;
          trData.appendChild(TdTitle);
          //create the td of the author, set its element type, list an arr of the class elements and the author name
          let tdAuthor = createElement("td", [], bookInfo.author);
          //set the container to be edditable and append the element
          tdAuthor.contentEditable = true;
          trData.appendChild(tdAuthor);
          //create the td of the isbn, set its element type, list an arr of the class elements and the isbn id
          let tdIsbn = createElement("td", [], bookInfo.isbn);
          //set the container to be edditable and append the element
          tdIsbn.contentEditable = true;
          trData.appendChild(tdIsbn);
          //create the td of the isbn, set its element type, list an arr of the class elements and the tags
          let tdTags = createElement('td', [], bookInfo.tags);
          //set the container to be edditable and append the element
          tdTags.contentEditable = true;
          trData.appendChild(tdTags);
          //create the actions panel and append the element
          let tdAction = createElement("td");
          trData.appendChild(tdAction);
          //set the additonal button edit and on click functionality
          let editButton = createElement("button", [], "Edit");
          tdAction.appendChild(editButton);
          editButton.addEventListener("click", editBook);
          //set the additonal button edit and on click functionality
          let deleteButton = createElement("button", [], "Delete");
          tdAction.appendChild(deleteButton);
          deleteButton.addEventListener("click", deleteBook);
          //append the new td elements to the tr container and the tr to the books collection obj
          booksCollection.booksContainerElement.appendChild(trData);
        }
      })
      .catch(errorHandler);
  }

  function editBook() {
    //select the current book
    let currentSelectedBook = this.parentNode.parentNode;
    // get the id of the current selected book
    let currentSelectedBookId = currentSelectedBook.getAttribute("data-id");
    // set the new details of the eddited book
    let edditedBook = {
      title: currentSelectedBook.querySelector("td:nth-child(1)").textContent,
      author: currentSelectedBook.querySelector("td:nth-child(2)").textContent,
      isbn: currentSelectedBook.querySelector("td:nth-child(3)").textContent,
      tags: currentSelectedBook.querySelector('td:nth-child(4)').textContent,
    };
    //process the edit request via the new eddited book and it's current id and check for errors
    requests
      .editBook(edditedBook, currentSelectedBookId)
      .catch(errorHandler);
  }

  function deleteBook() {
    //select the current book
    let currentSelectedBook = this.parentNode.parentNode;
    // get the id of the current selected book
    let currentSelectedBookId = currentSelectedBook.getAttribute("data-id");
    //process the delete book request and delete it from the html
    requests
      .deleteBook(currentSelectedBookId)
      .then(currentSelectedBook.remove())
      .catch(errorHandler);
  }

  function createElement(elementType, classNames, textContent) {
    //create element type
    let element = document.createElement(elementType);
    // check if second pram is className and add all of the classNames into an arr
    if (classNames) {
      element.classList.add(...classNames);
    }
    //check if third param is text and set it
    if (textContent) {
      element.textContent = textContent;
    }
    //return the element 
    return element;
  }

  function errorHandler(errorMessage) {

    if (errorMessage.message) {
      booksCollection.booksContainerElement.innerHTML = `Error: ${errorMessage.message}`;
    } else {
      booksCollection.booksContainerElement.innerHTML = `Error: ${errorMessage.status} (${errorMessage.statusText})`;
    }
  }
})();