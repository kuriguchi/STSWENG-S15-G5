/** Contact Controller */
const db = require('../models/db.js');

const Contact = require('../models/ContactModel.js');

const mongoose = require('mongoose');

const contactController = {
    createContact: async function(req, res) {
        const contact = req.body;
        const newContact = new Contact(contact);
    
        newContact.save()
            .then((savedContact) => {
                res.status(201).json(savedContact);
            })
            .catch((error) => {
                res.status(500).json({error: 'Server error: ' + error});
            });
    }
};

module.exports = contactController; 