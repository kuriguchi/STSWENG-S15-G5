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
    },

    getOrders: async function(req, res){
        try{
            const orders = await Order.find();
            res.json(orders);
        } catch (err) {
            console.log('Error retrieving orders: ', err);
        }
    },

    updateOrder: async function (req, res){
        const query = req.params.orderId;
        const order = req.body;

        try{
            const updatedOrder = await Order.updateOne({_id: query}, {
                orderNum: order.orderNum,
                orderedProduct: order.orderedProduct,
                name: order.name,
                contactNo: order.contactNo,
                email: order.email,
                fbLink: order.fbLink,
                mode: order.mode,
                dedication: order.dedication,
                orderDes: order.orderDes,
                address: order.address,
                dateOrdered: order.dateOrdered,
                datePickup: order.datePickup,
                status: order.status
            });

            console.log(updatedOrder);
        } catch (err) {
            console.log('Error updating order: ', err);
        }
    }
}

module.exports = orderController;