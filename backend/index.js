const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/routes.js');
const db = require('./models/db.js');

const app = express();
const port = process.env.PORT | 4000;

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', routes);

app.use(function (req, res) {
    res.render('error');
});

db.connect();

app.listen(port, function(){
    console.log('Server running at: ');
    console.log('app listening at port ' + port);
});

