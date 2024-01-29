const mongoose = require('mongoose');
require('dotenv').config();

// add models here *remove when done*

const uri = process.env.MONGO_URI;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const database = {
    connect: async function(){
        try{
            await mongoose.connect(uri, {});
            console.log('Connected to: ' + uri);
        } catch (error) {
            console.error('Error connecting to database: ', error);
        }
    }
};

module.exports = database;