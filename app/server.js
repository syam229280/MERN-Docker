'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
// Constants
const PORT = 6200;
const HOST = '0.0.0.0';

// App
const app = express();

//Express can’t process URL encoded forms on its own
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    require('./routes')(app, database);

    app.listen(PORT, HOST);

})