const Order =  require('../models/OrderModel.js');

const orderController = {
    createOrder: async function(req, res){
        const formData = req.body;
        const newData = new Order(formData);

        console.log(newData);

        await newData.save()
            .then((savedOrder) => {
                res.status(201).json(savedOrder);
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred: ' + error });
                console.log(error);
            });
    },

    updateOrder: async function (req, res){
        const query = req.params.orderId;
        const order = req.body;

        try{
            const updatedOrder = await Order.updateOne({orderNum: query}, order);

            if(!updatedOrder){
                res.status(404).json({error: 404, message: 'Order not found.'});
            } else {
                res.status(200).json(updatedOrder);
            }
        } catch (err){
            return res.status(500).send(err);
        }
    }, 

    deleteOrder: async function (req, res) {
        const query = req.params.orderId;

        try {
            const orderToDelete = await Order.deleteOne({orderNum: query});

            if(!orderToDelete){
                res.status(404).json({error: 404, message: 'Order not found.'});
            } else {
                res.status(200).json(orderToDelete);
            }
        } catch(err){
            return res.status(500).send(err);
        }
    },

    getAllOrders: async function(req, res){
        try{
            const orders = await Order.find();
            res.json(orders);
        } catch(err){
            return res.status(500).send(err);   
        }
    }
};

module.exports = orderController;