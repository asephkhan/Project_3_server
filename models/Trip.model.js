const { Schema, model } = require("mongoose");

// its a Trip model.
const tripSchema = new Schema({
  name : String,
  place : String,
  days : Number
});


const Trip = model("Trip", tripSchema);

module.exports = Trip;