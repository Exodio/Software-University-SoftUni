import * as requests from "./requests.js";

(function () {
  const domElements = {
    loadButtonElement: document.getElementById("loadBooks"),
    submitButtonElement: document.querySelector("form button"),

    booksContainerElement: document.querySelector("tbody"),

    titleInputElement: document.getElementById("title"),
    authorInputElement: document.getElementById("author"),
    isbnInputElement: document.getElementById("isbn"),
  };

  domElements.loadButtonElement.addEventListener("click", loadAllBooks);
  domElements.submitButtonElement.addEventListener("click", submitBook);

  function submitBook(e) {
    e.preventDefault();

    let title = domElements.titleInputElement.value;
    let author = domElements.authorInputElement.value;
    let isbn = domElements.isbnInputElement.value;

    if (!title || !author || !isbn) {
      return;
    }

    domElements.titleInputElement.value = "";
    domElements.authorInputElement.value = "";
    domElements.isbnInputElement.value = "";

    let newBookObj = {
      title,
      author,
      isbn,
    };

    requests
      .createNewBook(newBookObj)
      .then(loadAllBooks)
      .catch(errorHandler);
  }

  function loadAllBooks() {
    domElements.booksContainerElement.innerHTML = "";

    requests
      .getAllBooks()
      .then((data) => {
        if (data === null) {
          throw new Error("There are no books listed in this database container!");
        }

        for (const [id, bookInfo] of Object.entries(data)) {
          let tr = createElement("tr");
          tr.setAttribute("data-id", id);

          let title = createElement("td", [], bookInfo.title);
          title.contentEditable = true;

          let author = createElement("td", [], bookInfo.author);
          author.contentEditable = true;

          let isbn = createElement("td", [], bookInfo.isbn);
          isbn.contentEditable = true;

          let action = createElement("td");

          let editButton = createElement("button", [], "Edit");
          editButton.addEventListener("click", editBook);
          action.appendChild(editButton);

          let deleteButton = createElement("button", [], "Delete");
          deleteButton.addEventListener("click", deleteBook);
          action.appendChild(deleteButton);

          tr.appendChild(title);
          tr.appendChild(author);
          tr.appendChild(isbn);
          tr.appendChild(action);

          domElements.booksContainerElement.appendChild(tr);
        }
      })
      .catch(errorHandler);
  }

  function editBook() {
    let currentBook = this.parentNode.parentNode;

    let newBook = {
      title: currentBook.querySelector("td:nth-child(1)").innerText,
      author: currentBook.querySelector("td:nth-child(2)").innerText,
      isbn: currentBook.querySelector("td:nth-child(3)").innerText,
    };

    requests
      .updateBook(newBook, currentBook.getAttribute("data-id"))
      .catch(errorHandler);
  }

  function deleteBook() {
    let currentBook = this.parentNode.parentNode;
    requests
      .deleteBook(currentBook.getAttribute("data-id"))
      .then(currentBook.remove())
      .catch(errorHandler);
  }

  function createElement(elType, classNames, textContent) {
    let element = document.createElement(elType);

    if (classNames) {
      element.classList.add(...classNames);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  function errorHandler(err) {
    console.dir(err);

    if (err.message) {
      domElements.booksContainerElement.innerHTML = `Error: ${err.message}`;
    } else {
      domElements.booksContainerElement.innerHTML = `Error: ${err.status} (${err.statusText})`;
    }
  }
})();