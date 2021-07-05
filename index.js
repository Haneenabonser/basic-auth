'use strict';

require('dotenv').config();
const server = require('./server');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    server.start(PORT);
}).catch((e) => {
    console.error('connection faild', e.message);
});
