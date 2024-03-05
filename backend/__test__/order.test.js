const sinon = require('sinon');
const orderController = require('../controllers/orderController');
const Order = require('../models/OrderModel');

describe('Order Controller', () => {

    let error = new Error({ error: 'Some error message' });
    let req;
    let res;
    let orderStub;
    let expectedResult;

    describe('postOrder', () => {
        describe('given a valid order', () => {
            beforeEach(() => {
                req = { 
                    body: { 
                        orderNum: "12345",
                        orderedProduct: "Cake",
                        name: "Juan Dela Cruz",
                        contactNo: "1234567890",
                        email: "juan.delacruz@example.com",
                        fbLink: "https://www.facebook.com/juandelacruz",
                        mode: "Pick-up",
                        dedication: "For Birthday",
                        orderDes: "Special Instructions",
                        address: "123 Apple St",
                        dateOrdered: "2024-03-02",
                        datePickup: "2024-03-05",
                        status: "Pending"
                    }
                };

                res = {
                    json: sinon.spy(),
                    status: sinon.stub().returnsThis() // Allows chaining
                };

                expectedResult = {
                    orderNum: "12345",
                    orderedProduct: "Cake",
                    name: "Juan Dela Cruz",
                    contactNo: "1234567890",
                    email: "juan.delacruz@example.com",
                    fbLink: "https://www.facebook.com/juandelacruz",
                    mode: "Pick-up",
                    dedication: "For Birthday",
                    orderDes: "Special Instructions",
                    address: "123 Apple St",
                    dateOrdered: "2024-03-02",
                    datePickup: "2024-03-05",
                    status: "Pending"
                };
            });

            afterEach(() => {
                orderStub.restore();
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

        describe('given an invalid order', () => {

        });
    });
});