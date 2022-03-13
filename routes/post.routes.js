const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip.model') 
const Post = require('../models/Post.model')
const mongoose = require('mongoose');


router.get('/trip', (req, res) => {
    res.send('we are on post')  
});

router.post('/trip', (req, res, next) => {
    const{ experience, image,  } = req.body; 
    
    Post.create({numberOfDays, trips: []})
    .then((response) => res.json(response))
    .catch((err) => next(err));

    console.log(req.body);
});

module.exports = router;