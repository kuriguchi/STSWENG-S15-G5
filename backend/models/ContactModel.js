var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },

    contactNo: {
        type: String, 
        required: true
    }, 

    email: {
        type: String,
        required: true
    }, 

    fbLink: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contact', ContactSchema);