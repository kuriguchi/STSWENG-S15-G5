var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    }
    // continue other form attribute here
});

module.exports = mongoose.model('Order', OrderSchema);