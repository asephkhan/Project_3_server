const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight.model'); 
const City = require('../models/City.model')
const mongoose = require('mongoose');



// Get /flight - get all the existing flights
router.get('/flight', async (req, res) => {
    try {
        const allFlights = awiat Flight.find();
        res.status(200).json(allFlights);
    }catch (error) {
		res.status(500).json(error);
	}
    
});

// P0st /flight - create a flight
router.post('/flight', async (req, res, next) => {

    try{
        const{ type, origin, departureDate, returnDate, price } = req.body; 
        console.log(req.body);
    }

// save in the database
const createdFlight = Flight.create({ type, origin, departureDate, returnDate, price, city })
      
    console.log(createdFlight);

    
    
});

module.exports = router;