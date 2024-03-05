const sinon = require('sinon');
const contactController = require('../controllers/contactController');
const Contact = require('../models/ContactModel');
const mongoose = require('mongoose');
const controller = require('../controllers/controller');

describe('Contact Functions', () => {
    describe('Create Function', () =>{
        let saveStub;
        let req;
        let res;

        beforeEach(() => {

            req = { // sample data
                body:{
                    name: "pudge",
                    contactNo: "09123456789",
                    email: 'pudgemate@freshmeat.com',
                    fbLink: 'https://www.facebook.com/pudgybar',
                    address: 'direstatearea'
                }
            }
    
            res = {
                json: sinon.spy(),
                status: sinon.stub().returnsThis()
            }
        })

        afterEach(() => {
                saveStub.restore();
        });

        
        it('should create contact and save', async () => {
            const expectedSavedContact = {
                name: "pudge",
                contactNo: "09123456789",
                email: 'pudgemate@freshmeat.com',
                fbLink: 'https://www.facebook.com/pudgybar',
                address: 'direstatearea'
            };
    
            saveStub = sinon.stub(Contact.prototype,'save').resolves(expectedSavedContact);
            console.log(saveStub);
    
            await contactController.createContact(req, res);
    
            // Assertions
            sinon.assert.calledOnce(Contact.prototype.save); // mock save to database
            sinon.assert.calledWith(res.status, 201); // assert return 201
            sinon.assert.calledWith(res.json, expectedSavedContact); // expectSavedContact to be saved
        });

        
        it('should return as a server error',  async () => {
            const error = new Error('Simulated save error');

            saveStub = sinon.stub(Contact.prototype, 'save').callsFake(async function () {
                // Simulate the asynchronous save operation
                throw error;
            });

            await contactController.createContact(req,res);

            sinon.assert.calledOnce(saveStub);
            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledWith(res.json, { error: 'Server error: ' + error});
            });
        })
    });