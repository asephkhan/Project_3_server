const express = require('express');
const router = express.Router();
const City = require('../models/City.model')
const mongoose = require('mongoose');



// Get /cities- get all the existing cities
router.get('/city', (req, res) => {
   
});

// Post /cities- create a new city
router.post('/city',  async (req, res, next) => {
    try{
        //get the data from req.body
        const { cityName, locations, thingsToDo, image, weather } = req.body; 
        console.log(req.body);

        // save the data in the database
        const createdCity = await City.create({cityName, locations, thingsToDo, image, weather})
        res.status(201).json(createdCity);
    } catch (error) {
        res.status(500).json(error); // Internal Server Error
      }
   
}); 

module.exports = router;