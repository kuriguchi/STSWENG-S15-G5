const db = require('../models/db.js');

const Order=  require('../models/OrderModel.js');

const orderController = {
    postOrder: async function(req, res){
        const formData = req.body;
        const newData = new Order(formData);

        newData.save()
            .then((savedOrder) => {
                res.status(201).json(savedOrder);
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred: ' + error });
            });
    }
}

module.exports = orderController;