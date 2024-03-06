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

    let error = new Error({ error: 'Some error message' });
    let req;
    let res;
    let orderStub;
    let expectedResult;

    describe('Adding new order', () => {
        describe('Given a valid order', () => {
            beforeEach(() => {
                req = { body: createRandomOrder() };
                
                res = {
                    json: sinon.spy(),
                    status: sinon.stub().returnsThis() // Allows chaining
                };

                expectedResult = req.body;
            });

            afterEach(() => {
                if (orderStub) {
                    orderStub.restore();
                }
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
        describe('Given a valid order ID and updated order details', () => {
            beforeEach(() => {

                req = { body: createRandomOrder() };
                
                req.params = { orderId: req.body.orderNum };

                res = {
                    json: sinon.spy(),
                    status: sinon.stub().returnsThis()
                };

                expectedResult = req.body;
            });

            afterEach(() => {
                if (orderStub) {
                    orderStub.restore();
                }
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

        describe('Given an invalid order ID', () => {
            beforeEach(() => {

                req = { body: createRandomOrder() };
                
                req.params = { orderId: req.body.orderNum };

                res = {
                    json: sinon.spy(),
                    status: sinon.stub().returnsThis()
                };
            });

            afterEach(() => {
                if (orderStub) {
                    orderStub.restore();
                }
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

        describe('Given an error when updating the order', () => {
            beforeEach(() => {
                req = { body: createRandomOrder() };
                
                req.params = { orderId: req.body.orderNum };

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
});