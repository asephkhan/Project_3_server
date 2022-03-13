const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight.model'); 
const mongoose = require('mongoose');




router.get('/flight', (req, res) => {
    res.send('we are on flight')
});

router.post('/flight', (req, res, next) => {
    const{ type, origin, departureDate, returnDate, price } = req.body;  
    console.log(req.body);

    Project.create({ type, origin, departureDate, returnDate, price, destination: [] })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

module.exports = router;