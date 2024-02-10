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
    },

    updateContact: async function(req, res){
        const query = new mongoose.Types.ObjectId(req.query);
        const contact = req.body;

        Contact.updateOne({_id: query}, contact)
            .then((updatedContact) => {
                if(updatedContact.matchedCount !== 0){
                    res.status(201).json({status: 201, message: 'Update Contact Success!'});
                } else{
                    res.status(404).json({error: 404, message: 'Contact not found.'});
                }
            })
            .catch((error) => {
                res.status(500).json({error: 'Server Error: ' + error});
            })
    },

    deleteContact: async function(req, res){
        const query = new mongoose.Types.ObjectId(req.query);

        Contact.deleteOne({_id: query})
            .then((response) => {
                if(response.deletedCount !== 0){
                    res.status(201).json({status: 201, message: 'Delete Contact Successful!'});
                } else{
                    res.status(404).json({status: 404, message: 'Contact not found.'})
                }
            })
            .catch((error) => {
                res.status(500).json({error: 'Server error: ' + error});
            });
    }, 

    getContact: async function(req, res){
        const query = new mongoose.Types.ObjectId(req.query);

        Contact.findById(query)
            .then((response) => {
                if(response){
                    res.status(201).json(response);
                } else{
                    res.status(404).json({status: 404, message: 'Contact not found.'});
                }
            })
            .catch((error) => {
                res.status(500).json({error: 'Server error: ' + error});
            });
    },

    getAllContacts: async function(req, res){
        try{
            const contacts = await Contact.find();

            res.json(contacts);
        } catch(err){
            return res.status(500).send(err);
        }
    }
};

module.exports = contactController; 