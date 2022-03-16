const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip.model') 
const mongoose = require('mongoose');


 router.get('/trip', (req, res) => {
    Trip.find()
    .then((response) => res.json(response))
    .catch((err) => next(err));
});
 
router.post('/trip', (req, res, next) => {
    const{ name, place, days } = req.body; 
    
    
    Trip.create({ name, place, days})
    .then((response) => res.json(response))
    .catch((err) => next(err));

 
});

router.get('/trips/:tripId', (req,res,next) => {
  const { tripId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }
  Trip.findById(tripId)
  .then((response) => res.json(response))
  .catch((err) => res.json(err));
});



router.put('/trips/:tripId', (req, res, next) => {
    const { tripId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(tripId)) {
      res.status(400).json({ message: 'Specified Id is not valid' });
      return;
    }
  
    Trip.findByIdAndUpdate(tripId, req.body, { new: true })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });

  router.delete('/trips/:tripId', (req, res) => {
    const { tripId } = req.params;
 
    if (!mongoose.Types.ObjectId.isValid(tripId)) {
      res.status(400).json({ message: 'Specified Id is not valid' });
      return;
    }

    Trip.findByIdAndRemove(tripId)
    .then(() => res.json({ message: `Trip with ${tripId} was removed successfully` }))
    .catch((err) => res.json(err));


  });

 

module.exports = router;