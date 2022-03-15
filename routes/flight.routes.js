const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight.model'); 
const City = require('../models/City.model')
const mongoose = require('mongoose');
const Amadeus = require('amadeus')


// Getting env variables 
 const { CLIENT_ID, CLIENT_SECRET } = require('../config/dotenv');   
const API = `api`;
// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
const amadeus = new Amadeus({
  clientId: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET'
});
// Endpoint
router.get(`/${API}/airports`, async (req, res) => {
  const { page, subType, keyword } = req.query;
  // API call with params we requested from client app
  const response = await amadeus.client.get("/v1/reference-data/locations", {
    keyword,
    subType,
    "page[offset]": page * 10
  });
  // Sending response for client
  try {
   let response = await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Get /flight - get all the existing flights
/* router.get('/flight', async (req, res) => {
    try {
        const allFlights = await Flight.find();
        res.status(200).json(allFlights);
    }catch (error) {
		res.status(500).json(error);
	}
    
}); */

// P0st /flight - create a flight
/* router.post('/flight', async (req, res, next) => {

    try{
        const{ type, origin, departureDate, returnDate, price } = req.body; 
        console.log(req.body);

        const createdFlight = Flight.create({ type, origin, departureDate, returnDate, price, city })
      
    console.log(createdFlight);
    }});
 */
// save in the database


module.exports = router;