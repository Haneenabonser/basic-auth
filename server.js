'use strict';

const express = require('express');
const signRouter = require('./auth/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', signRouter);


module.exports ={
    app,
    start: (port)=>{
        app.listen(port, ()=>{console.log(`Listening on ${port}`)});
    }
};