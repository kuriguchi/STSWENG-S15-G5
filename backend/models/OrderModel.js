var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    orderNum: {
        type: String,
        default: 'Unknown Order',
        required: true,
    },

    orderedProduct: {
        type: String,
        required: true
    },

    fname: {
        type: String,
        default: '',
        required: true
    },

    lname: {
        type: String,
        default: '',
        required: true
    },

    contactNo: {
        type: String,
        default: '',
        required: true
    },

    email: {
        type: String,
        default: 'email',
        required: true
    },

    addr1: {
        type: String,
        default: '',
        required: true
    },

    addr2: {
        type: String,
        default: '',
        required: true
    },

    city: {
        type: String,
        default: '',
        required: true
    },

    province: {
        type: String,
        default: '',
        required: true
    },

    size: {
        type: String,
        default: '',
        required: true
    },

    qty: {
        type: Number,
        default: 1,
        required: true
    }, 

    mode: {
        type: String,
        enum: ['Store Pick-Up', 'Lalamove', 'Grab', 'Client'],
        default: 'Store Pick-Up',
        required: true
    },

    additional: {
        type: String,
        default: 'None'
    },

    dateOrdered: {
        type: String,
        default: (new Date()).toDateString()
    },

    datePickup: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected', 'Completed'],
        default: 'Pending',
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);