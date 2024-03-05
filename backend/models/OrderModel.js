const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNum: {
        type: String,
        default: 'Unknown Order',
        required: true,
    },

    orderedProduct: {
        type: String,
        required: true
    },

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

    mode: {
        type: String,
        enum: ['Delivery by Grab/Lalamove', 'Pick-up', 'Delivery by Client'],
        default: 'Pick-up',
        required: true
    },

    dedication: {
        type: String,
        default: 'None'
    },

    orderDescription: {
        type: String,
        default: 'None'
    }, 

    address: {
        type: String,
        default: 'Pick-up'
    }, 

    dateOrdered: {
        type: String,
        required: true
    },

    datePickup: {
        type: String,
        required: true
    },

    /** Image attribute here */

    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected', 'Completed'],
        default: 'Pending',
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);