const baseUrl = "https://books-exercise-55947.firebaseio.com/";

export const getAllBooks = () => {
    return fetch(baseUrl + "books.json").then(jsonMiddleware);
}

export const createNewBook = (bookBody) => {
    return fetch(baseUrl + "books.json", {
            method: "POST",
            body: JSON.stringify(bookBody),
        })
        .then(jsonMiddleware);
}

export const updateBook = (bookBody, bookId) => {
    return fetch(`${baseUrl}books/${bookId}.json`, {
            method: "PUT",
            body: JSON.stringify(bookBody)
        })
        .then(jsonMiddleware);
}

export const deleteBook = (bookId) => {

    return fetch(`${baseUrl}books/${bookId}.json`, {
            method: "Delete"
        })
        .then(jsonMiddleware);
}

function jsonMiddleware(response) {

    if (response.status >= 400) {
        throw (response);
    }

    return response.json();
}