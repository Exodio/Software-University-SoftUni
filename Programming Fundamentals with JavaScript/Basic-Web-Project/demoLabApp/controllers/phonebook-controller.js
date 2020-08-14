const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

// TODO: load index page // DONE!
module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook(),
    });

  },
  
  addPhonebookPost: (req, res) => {
    // TODO: add a phonebook object to the array // DONE!
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number);

    phonebook.addContact(contact);
    res.redirect("/");
  }
}