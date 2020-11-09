//set the requests
const baseUrl = "https://books-exercise-55947.firebaseio.com/";

export const submitNewBook = (bookData) => {

    return fetch(`${baseUrl}books.json`, {
            method: "POST",
            body: JSON.stringify(bookData),
        })
        .then(jsonMiddleware);
}

export const getAllBooks = () => {

    return fetch(`${baseUrl}books.json`)
        .then(jsonMiddleware);
}

export const editBook = (bookData, bookId) => {

    return fetch(`${baseUrl}books/${bookId}.json`, {
            method: "PUT",
            body: JSON.stringify(bookData)
        })
        .then(jsonMiddleware);
}

export const deleteBook = (bookId) => {

    return fetch(`${baseUrl}books/${bookId}.json`, {
            method: "DELETE",
        })
        .then(jsonMiddleware);
}

function jsonMiddleware(response) {

    if (response.status >= 400) {
        throw (response);
    }

    return response.json();
}