const express = require('express');

const controller = require('../controllers/controller.js');
const orderController = require('../controllers/orderController.js');

// add more controllers here *remove when done*

const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);

// routes *remove when done*
app.post('/postOrder', orderController.postOrder);
app.post('/updateOrder/:orderId', orderController.updateOrder);
app.get('/deleteOrder/:orderId', orderController.DeleteOrder);
app.get('/getAllOrders', orderController.getAllOrders);

module.exports = app;