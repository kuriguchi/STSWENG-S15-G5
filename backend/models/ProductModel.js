const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        default: 'Unknown Product',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);