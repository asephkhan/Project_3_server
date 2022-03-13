const express = require('express');
const router = express.Router();
const City = require('../models/City.model')
const mongoose = require('mongoose');




router.get('/', (req, res) => {
    res.send('we are on city')
});

router.post('/', (req, res, next) => {
    const { cityName, locations, thingsToDo, image, weather } = req.body; 
    console.log(req.body);
}); 

module.exports = router;