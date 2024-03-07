const express = require('express');

const controller = require('../controllers/controller.js');
const orderController = require('../controllers/orderController.js');
const contactController = require('../controllers/contactController.js');

const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);

app.post('/postOrder', orderController.createOrder);
app.post('/updateOrder/:orderId', orderController.updateOrder);
app.get('/deleteOrder/:orderId', orderController.deleteOrder);
app.get('/getAllOrders', orderController.getAllOrders);

app.post('/createContact', contactController.createContact);
app.post('/updateContact', contactController.updateContact);
app.get('/deleteContact', contactController.deleteContact);
app.get('/getContact', contactController.getContact);
app.get('/getAllContacts', contactController.getAllContacts);

module.exports = app;