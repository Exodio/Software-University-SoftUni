//basic use of HTML templates using hbs(handlebars)
//npm init //we initialize the application in terminal
//npm install express --save //used in terminal to intiate the server actions
//np install express-nahdlebars --save //Our templated HTML server response
const express = require("express"); //main request initiator
const handlebars = require('express-handlebars'); //main engine set

app.engine('hbs', handlebars({ //handlebars configuration
    layoutsDir: 'views',
    defaultLayout: 'main-layout',
    partialsDir: 'views/partials',
    extname: 'hbs',
}));
app.set("view engine", "hbs"); //we define our handlebars expression

const app = express(); //calling out the function above
const port = 3013; //local free port

app.render("/", function(req, res){ //we call the function to check in ours views folder for the index hbs
    res.render("index", {layout: false});
})
app.get("/greeting", function (req, res) { //we define action - answers requests
    res.send("Hey there user"); //once request is called the following answer will be received
});
app.get("/ask", (req, res) => { //action definiton with arrow function
    res.send("What is your name ?");
});
app.listen(port, () => console.log(`Listening on port ${port}...`)); //It checks if any actions are required, we declare it to always be checking and reviewing if actions are requred