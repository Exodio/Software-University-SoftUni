function solve(input) {
    let library = input.shift().split("&");
    let command = input.shift().split(" | ")

    while (command != "Done") {
        let comandInput = command[0]
        let bookOne = command[1]
        let bookTwo = command[2];

        if (comandInput === "Add Book") {
            addBook(bookOne);
        } else if (comandInput === "Take Book") {
            takeBook(bookOne)
        } else if (comandInput === "Swap Books") {
            swapBook(bookOne, bookTwo)
        } else if (comandInput === "Insert Book") {
            insertBook(bookOne)
        } else if (comandInput === "Check Book") {

            if (library[Number(bookOne)] !== undefined) {
                console.log(library[Number(bookOne)]);
            }
        }

        command = input.shift().split(" | ");
    }
    console.log(library.join(", "))


    function addBook(bookname) {

        if (!(library.includes(bookname))) {
            library.unshift(bookname)
        }
    }

    function takeBook(bookname) {

        if (library.includes(bookname)) {
            let ind = library.indexOf(bookname);
            library.splice(ind, 1)
        }
    }

    function swapBook(bookOne, bookTwo) {

        if (library.includes(bookOne) && library.includes(bookTwo)) {
            let indBookOne = library.indexOf(bookOne);
            let indBookTwo = library.indexOf(bookTwo);
            library.splice(indBookOne, 1, bookTwo);
            library.splice(indBookTwo, 1, bookOne)
        }
    }

    function insertBook(bookname) {
        return library.push(bookname);
    }

}
solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | David Copperfield",
    "Add Book | One Thousand and One Nights",
    "Swap Books | One Thousand and One Nights | Catch-22",
    "Take Book | David Copperfield",
    "Insert Book | The Stories of Anton Chekhov",
    "Check Book | 17",
    "Done",
]);