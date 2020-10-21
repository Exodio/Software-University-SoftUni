solveClasses = () => {

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {

            if (content.length >= 150) { //check length
                throw new Error("Short reports content should be less then 150 symbols.");
            }

            if (!originalResearch.hasOwnProperty("title") || !originalResearch.hasOwnProperty("author")) { //check if props are linked
                throw new Error("The original research should have author and title.");
            }

            super(title, content); //get the initial data
            this.originalResearch = originalResearch; //set new data
            this.comments = []; //set new data
        }

        addComment(comment) { //Add comments to comments arr
            this.comments.push(comment);
            return "The comment is added.";
        }

        toString() { //extends initial toString
            let output = super.toString(); //take the data from the initial toString and extend it
            output += `\nOriginal Research: ${ this.originalResearch.title } by ${ this.originalResearch.author }`; //extend the toString method with the received data

            if (this.comments.length > 0) { //if there are comments
                output += "\nComments:\n"; // add comments string
                output += this.comments.join("\n"); //add the arr of strings each one on a new line
            }

            return output; //return the data in order to be saved!
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) { //adds new client
            let orderCheckout = this.clients.find(x => x.name === clientName && x.description === orderDescription); // check if we have client which has the same name && order as well as if he has any of the two inputs

            if (orderCheckout) { // if true => we have a match for this order
                throw new Error ("This client has already ordered this review.");
            }

            this.clients.push({name:clientName, description:orderDescription,}); // if order does not exist -> add the order to the clients array as an OBJECT!
            return `${clientName} has ordered a review for ${ this.book.name}`; // output-> the clientName and the book purchased
        }

        toString(){ //extends the initial toString
            let output = super.toString(); //takes the information save in the toString method from the previous toString's and extends them
            output += `\nBook: ${this.book.name}`; //add the book name to the output on a new line

            if (this.clients.length > 0) { //check if there are any orders left
                output += "\nOrders:\n"; //if true -> print
                output += this.clients.map(x => `${x.name} - ${x.description}`).join("\n"); //we use the (map) method or (we can use(forEach)) method because the orders are objects listed in the array and after we make an arr of each individual order we join it on a new line
            }

            return output; //!return the data
        }
    }

    return { //!never forget to return the classes!
        Article,
        ShortReports,
        BookReview,
    };
}

//input
let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
//------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", {
    title: "Dragon 2",
    author: "wikipedia.org"
});
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString());
//------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 