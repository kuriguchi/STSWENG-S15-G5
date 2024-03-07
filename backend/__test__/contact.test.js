const sinon = require('sinon');
const contactController = require('../controllers/contactController');
const Contact = require('../models/ContactModel');
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

function createRandomContact() {
    return new Contact({
            _id:  new mongoose.Types.ObjectId(),
            name: faker.person.fullName(),
            contactNo: faker.finance.accountNumber(10),
            email: faker.internet.email(),
            fbLink: faker.internet.url(),
            address: faker.location.streetAddress({ useFullAddress: true }),
    });
}

describe('Contact Controller Functions', () => {

    let req;
    let res;
    let expectedResult;
    let contactStub;

    let error = "Error: Error"

    beforeEach(() => {
        req = {body: createRandomContact()}
        res = {
            json: sinon.spy(),
            status: sinon.stub().returnsThis(),
            send: sinon.spy()
        }
    })

    afterEach(() => {
        if (contactStub) {
            contactStub.restore();
        }
    });

    describe('Creating new contact', () => {
        
        beforeEach(() => {
            expectedResult = req.body;   
        });

        describe('when contact is valid', () => {


            it('should create and save contact to database', async()=>{
                contactStub = sinon.stub(Contact.prototype, 'save').resolves(expectedResult);
                await contactController.createContact(req,res);
                sinon.assert.calledOnce(Contact.prototype.save)
            })

            it('should return status code 201', async() => {
                contactStub = sinon.stub(Contact.prototype,'save').resolves(expectedResult);
                await contactController.createContact(req, res);
                sinon.assert.calledWith(res.status, 201);
            });

            it('should contain the expected contact information', async() => {
                contactStub = sinon.stub(Contact.prototype,'save').resolves(expectedResult);
                await contactController.createContact(req, res);
                sinon.assert.calledWith(res.json, expectedResult);
            });
        })

        describe("when saving contact had server error", () => {
            
            it('should return status 500', async ()=> {
                contactStub = sinon.stub(Contact.prototype, 'save').rejects(expectedResult);
                await contactController.createContact(req,res);
                sinon.assert.calledWith(res.status, 500);
            })

            it('should return error message', async () => {
                contactStub = sinon.stub(Contact.prototype, 'save').rejects(null);
                await contactController.createContact(req,res);
                sinon.assert.calledWith(res.json, { error: 'Server error: ' + error});
            })     
        })
    })

    describe('Updating contact', ()=>{
                
        beforeEach(() => {
            req.query = req.body._id
            expectedResult = req.body;   
        });

        describe('when a valid contact id found:', ()=>{

            it('should update contact', async () => {
                contactStub = sinon.stub(Contact, 'updateOne').resolves(expectedResult)
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(Contact.updateOne, {_id: req.query}, expectedResult)
            })

            it('should return status 201', async () =>{
                contactStub = sinon.stub(Contact, 'updateOne').resolves(expectedResult)
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(res.status, 201);
            })

            it('should return success message', async () =>{
                contactStub = sinon.stub(Contact, 'updateOne').resolves(expectedResult)
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(res.json, {status: 201, message: 'Update Contact Success!'});
            })
        })

        describe('when contact is not found', () =>{
            it('should return status 404', async() => {
                contactStub = sinon.stub(Contact, 'updateOne').resolves({matchedCount: 0})
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(res.status, 404);
            })

            it('should return an error message', async () => {
                contactStub = sinon.stub(Contact, 'updateOne').resolves({matchedCount: 0})
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(res.json, {error: 404, message: 'Contact not found.'});
            })
        })

        describe('when there is error in updating', () => {

            it('should return status 500', async() => {
                contactStub = sinon.stub(Contact, 'updateOne').resolves(null)
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(res.status, 500)
            })

            it('should return a server error message', async() => {
                contactStub = sinon.stub(Contact, 'updateOne').resolves(null)
                await contactController.updateContact(req,res)
                sinon.assert.calledWith(res.json, {error: 'Server Error: ' + "TypeError: Cannot read properties of null (reading 'matchedCount')"})
            })
        })
    })

    describe('Deleting contact', () => {

        beforeEach(() => {
            req.query = req.body._id
            expectedResult = req.body;   
        });

        describe('when valid contact id is found', () => {
            it('should delete the contact in database', async()=>{
                contactStub = sinon.stub(Contact, 'deleteOne').resolves(expectedResult)
                await contactController.deleteContact(req,res)
                sinon.assert.calledWith(Contact.deleteOne, {_id: req.query})
            })

            it('should return status 201', async () => {
                contactStub = sinon.stub(Contact, 'deleteOne').resolves(expectedResult)
                await contactController.deleteContact(req,res)
                sinon.assert.calledWith(res.status, 201)
            })

            it('should return success message', async () => {
                contactStub = sinon.stub(Contact, 'deleteOne').resolves(expectedResult)
                await contactController.deleteContact(req,res)
                sinon.assert.calledWith(res.json,{status: 201, message: 'Delete Contact Successful!'})
            })
        })

        describe('when contact is not found', () => {
            it('should return status 404', async() => {
                contactStub = sinon.stub(Contact, 'deleteOne').resolves({deletedCount: 0})
                await contactController.deleteContact(req,res)
                sinon.assert.calledWith(res.status, 404);
            })

            it('should return error message', async () => {
                contactStub = sinon.stub(Contact, 'deleteOne').resolves({deletedCount: 0})
                await contactController.deleteContact(req,res)
                sinon.assert.calledWith(res.json, {status: 404, message: 'Contact not found.'})
            })
        })

        describe('when there is an error in deleting',() => {
            it('should return status 500 and error message', async() => {
                contactStub = sinon.stub(Contact, 'deleteOne').resolves(null)
                await contactController.deleteContact(req,res)
                sinon.assert.calledWith(res.json, {error: 'Server error: ' + "TypeError: Cannot read properties of null (reading 'deletedCount')"})
            })
        })
    })

    describe('Getting Contact', () => {

        beforeEach(() => {
            req.query = req.body._id
            expectedResult = req.body;   
        });

        describe('when there is a valid contact', () => {

            it('should return specific contact',  async () => {

                contactStub = sinon.stub(Contact, 'findById').resolves(expectedResult)
                await contactController.getContact(req,res)
                sinon.assert.calledWith(res.json, expectedResult)
                sinon.assert.calledWith(Contact.findById, req.query)
            })

            it('should return status 201', async() => {
                contactStub = sinon.stub(Contact, 'findById').resolves(expectedResult)
                await contactController.getContact(req,res)
                sinon.assert.calledWith(res.status, 201)
            })
        })

        describe('when no contact is found', () => {
            it('should return status 404', async() => {
                contactStub = sinon.stub(Contact, 'findById').resolves(null)
                await contactController.getContact(req,res)
                sinon.assert.calledWith(res.status, 404)
            })


            it('should return error message', async() => {
                contactStub = sinon.stub(Contact, 'findById').resolves(null)
                await contactController.getContact(req,res)
                sinon.assert.calledWith(res.json, {status: 404, message: 'Contact not found.'})
            })
        })

        describe('when there is server error', ()=> {

            it('should set status 500', async () => {
                contactStub = sinon.stub(Contact, 'findById').rejects(expectedResult)
                await contactController.getContact(req,res)
                sinon.assert.calledWith(res.status, 500)
            })

            it('should return error message', async () => {
                contactStub = sinon.stub(Contact, 'findById').rejects(null)
                await contactController.getContact(req,res)
                sinon.assert.calledWith(res.json, {error: 'Server error: ' + error})
            })

        })

    })

    describe('Getting all contacts', () => {
        describe('when database have contact', ()=>{
            it('should return all contact', async () => {
                const contact = [createRandomContact(), createRandomContact()];
                contactStub = sinon.stub(Contact, 'find').resolves(contact);
                await contactController.getAllContacts({}, res);
                sinon.assert.calledWith(res.json, contact);
            })
        })

        describe('when database is empty', ()=>{
            it('should return status 500', async () => {
                contactStub = sinon.stub(Contact, 'find').throws(new Error('Internal Server Error'))
                await contactController.getAllContacts({}, res);
                sinon.assert.calledWith(res.status, 500);
            })

            it('should return error message', async () => {
                const errorSample = new Error('Internal Server Error')
                orderStub = sinon.stub(Contact, 'find').throws(errorSample);
                await contactController.getAllContacts({}, res);
                sinon.assert.calledWith(res.send, errorSample);
            })
        })
    })


})