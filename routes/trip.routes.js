const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip.model') 
const Flight = require('../models/Flight.model'); 
const mongoose = require('mongoose');


router.get('/trip', (req, res) => {
    res.send('we are on flight')  
});

router.post('/trip', (req, res, next) => {
    const{ numberOfDays } = req.body; 
    
    Trip.create({numberOfDays, flight: []})
    .then((response) => res.json(response))
    .catch((err) => next(err));

    console.log(req.body);
});

module.exports = router;