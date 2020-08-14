// TODO: Create Contact model and export it //DONE!
// TODO: Require the contact class from the models //DONE!

class Contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}
module.exports = Contact;

const Contact = require("../models/Contact");