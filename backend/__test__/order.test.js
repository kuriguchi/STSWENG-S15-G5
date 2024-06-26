const sinon  = require('sinon');
const { faker } = require('@faker-js/faker');
const orderController = require('../controllers/orderController');
const Order = require('../models/OrderModel');

function createRandomOrder() {
    return new Order( {
        orderNum: faker.number.int({min: 1, max: 10000000}),
        orderedProduct: faker.commerce.productName(),
        name: faker.person.fullName(),
        contactNo: faker.finance.accountNumber(10),
        email: faker.internet.email(),
        fbLink: faker.internet.url(),
        mode: faker.helpers.arrayElement(['Delivery by Grab/Lalamove', 'Pick-up', 'Delivery by Client']),
        dedication: faker.lorem.words(3),
        orderDescription: faker.lorem.sentence(),
        address: faker.location.streetAddress({ useFullAddress: true }),
        dateOrdered: faker.date.recent().toISOString().split('T')[0], // To get YYYY-MM-DD format
        datePickup: faker.date.future().toISOString().split('T')[0], // To get YYYY-MM-DD format
        status: faker.helpers.arrayElement(['Pending', 'Accepted', 'Rejected', 'Completed'])
    });
}

describe('Order Controller', () => {

    let req;
    let res;
    let orderStub;
    let expectedResult;

    beforeEach(() => {

        req = { body: createRandomOrder() };

        res = {
            json: sinon.spy(),
            status: sinon.stub().returnsThis(),
            send: sinon.spy()
        };
    });

    afterEach(() => {
        if (orderStub) {
            orderStub.restore();
        }
    });

    describe('Adding new order', () => {
        describe('When there is a valid order', () => {
            beforeEach(() => {
                
                expectedResult = req.body;
            });

            it('should save the order to the database', async () => {
                orderStub = sinon.stub(Order.prototype, 'save').resolves(expectedResult);
                await orderController.createOrder(req, res);
                sinon.assert.calledOnce(Order.prototype.save);
            });

            it('should return status code 201', async () => {
                orderStub = sinon.stub(Order.prototype, 'save').resolves(expectedResult);
                await orderController.createOrder(req, res);
                sinon.assert.calledWith(res.status, 201);
            });
            
            it('should return the order object', async () => {
                orderStub = sinon.stub(Order.prototype, 'save').resolves(expectedResult);
                await orderController.createOrder(req, res);
                sinon.assert.calledWith(res.json, expectedResult);
            }); 
        });
    });

    describe('Updating an order', () => {
        describe('When there is a valid order ID and updated order details', () => {

            beforeEach(() => {                
                req.params = { orderId: req.body.orderNum };
                expectedResult = req.body;
            });

            it('should update the order in the database', async () => {
                orderStub = sinon.stub(Order, 'updateOne').resolves(expectedResult);
                await orderController.updateOrder(req, res);
                sinon.assert.calledOnce(Order.updateOne);
            });

            it('should return status code 200', async () => {
                orderStub = sinon.stub(Order, 'updateOne').resolves(expectedResult);
                await orderController.updateOrder(req, res);
                sinon.assert.calledWith(res.status, 200);
            });

            it('should return the updated order object', async () => {
                orderStub = sinon.stub(Order, 'updateOne').resolves(expectedResult);
                await orderController.updateOrder(req, res);
                sinon.assert.calledWith(res.json, expectedResult);
            });
        });

        describe('When there is an invalid order ID', () => {
            beforeEach(() => {                
                req.params = { orderId: req.body.orderNum };
            });

            it('should return status code 404', async () => {
                orderStub = sinon.stub(Order, 'updateOne').resolves(null);
                await orderController.updateOrder(req, res);
                sinon.assert.calledWith(res.status, 404);
            });

            it('should return an error message', async () => {
                orderStub = sinon.stub(Order, 'updateOne').resolves(null);
                await orderController.updateOrder(req, res);
                sinon.assert.calledWith(res.json, { error: 404, message: 'Order not found.' });
            });

        });

        describe('When there is an error updating the order', () => {
            beforeEach(() => {                
                req.params = { orderId: req.body.orderNum };
            });

            it('should return status code 500', async () => {
                orderStub = sinon.stub(Order, 'updateOne').throws(new Error());
                await orderController.updateOrder(req, res);
                sinon.assert.calledWith(res.status, 500);
            });

            it('should return an error message', async () => {
                const sampleError = new Error('Internal Server Error');
                orderStub = sinon.stub(Order, 'updateOne').throws(sampleError);
                await orderController.updateOrder(req, res);
                sinon.assert.calledWith(res.send, sampleError);
            });
        });
    });

    describe('Deleting an order', () => {
        describe('When there is a valid order ID', () => {
            beforeEach(() => {
                req.params = { orderId: req.body.orderNum };
                expectedResult = req.body;
            });

            it('should delete the order from the database', async () => {
                orderStub = sinon.stub(Order, 'deleteOne').resolves(expectedResult);
                await orderController.deleteOrder(req, res);
                sinon.assert.calledOnce(Order.deleteOne);
            });

            it('should return status code 200', async () => {
                orderStub = sinon.stub(Order, 'deleteOne').resolves(expectedResult);
                await orderController.deleteOrder(req, res);
                sinon.assert.calledWith(res.status, 200);
            });

            it('should return the deleted order object', async () => {
                orderStub = sinon.stub(Order, 'deleteOne').resolves(expectedResult);
                await orderController.deleteOrder(req, res);
                sinon.assert.calledWith(res.json, expectedResult);
            });
        });

        describe('When there is an invalid order ID', () => {
            beforeEach(() => {
                req.params = { orderId: req.body.orderNum };
            });

            it('should return status code 404', async () => {
                orderStub = sinon.stub(Order, 'deleteOne').resolves(null);
                await orderController.deleteOrder(req, res);
                sinon.assert.calledWith(res.status, 404);
            });

            it('should return error message', async () => {
                orderStub = sinon.stub(Order, 'deleteOne').resolves(null);
                await orderController.deleteOrder(req, res);
                sinon.assert.calledWith(res.json, { error: 404, message: 'Order not found.' });
            });
        });

        describe('When there is an error deleting the order', () => {
            beforeEach(() => {                
                req.params = { orderId: req.body.orderNum };
            });

            it('should return status code 500', async () => {
                orderStub = sinon.stub(Order, 'deleteOne').throws(new Error());
                await orderController.deleteOrder(req, res);
                sinon.assert.calledWith(res.status, 500);
            });

            it('should return an error message', async () => {
                const sampleError = new Error('Internal Server Error');
                orderStub = sinon.stub(Order, 'deleteOne').throws(sampleError);
                await orderController.deleteOrder(req, res);
                sinon.assert.calledWith(res.send, sampleError);
            });
        });
    });

    describe('Getting all orders', () => {
        describe('When there are orders in the database', () => {
            it('should return all orders', async () => {
                const orders = [createRandomOrder(), createRandomOrder()];
                orderStub = sinon.stub(Order, 'find').resolves(orders);
                await orderController.getAllOrders({}, res);
                sinon.assert.calledWith(res.json, orders);
            });
        });

        describe('When there are no orders in the database', () => {
            it('should return an empty array', async () => {
                orderStub = sinon.stub(Order, 'find').resolves([]);
                await orderController.getAllOrders({}, res);
                sinon.assert.calledWith(res.json, []);
            });
        });

        describe('When an error occurs while retrieving orders', () => {

            afterEach(() => {
                if (orderStub) {
                    orderStub.restore();
                }
            });

            it('should return status code 500', async () => {
                orderStub = sinon.stub(Order, 'find').throws(new Error('Internal Server Error'));
                await orderController.getAllOrders({}, res);
                sinon.assert.calledWith(res.status, 500);
            });

            it('should return error message', async () => {
                const sampleError = new Error('Internal Server Error');
                orderStub = sinon.stub(Order, 'find').throws(sampleError);
                await orderController.getAllOrders({}, res);
                sinon.assert.calledWith(res.send, sampleError);
            });
        });
    });
});