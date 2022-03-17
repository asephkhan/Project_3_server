const { Schema, model } = require("mongoose");

// its a Trip model.
const tripSchema = new Schema({
  name : String,
  place : String,
  days : Number,
  thingsToDo: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
});


const Trip = model("Trip", tripSchema);

module.exports = Trip;