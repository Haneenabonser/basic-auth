'use strict';

const express = require('express');
const router = express.Router();
const Users = require('./user-model');
const bcrypt = require('bcrypt');
const basicAuth = require('./basicAuth');



router.post('/signin', basicAuth, (req, res) => {
    res.status(201).json(req.body.user)
});


// signup
router.post('/signup', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = new Users(req.body);
        const record = await user.save(req.body);
        res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
});



module.exports = router;