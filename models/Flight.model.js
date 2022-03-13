const { Schema, model } = require("mongoose");

// its a flights model.
const flightSchema = new Schema({
  
  type: { type: String },
  origin: {type: String},
  departureTime: { type: String },
  returnDate: { type: String },
  price: { total: String }, 
  destination: [{type: Schema.Types.ObjectId, ref: 'City'}], 

  links: {
  flightDates:{ type: String},
  flightOffers:{ type: String},
   }
 
});


const Flight = model("Flight", flightSchema);

module.exports = Flight;
