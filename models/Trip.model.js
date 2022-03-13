const { Schema, model } = require("mongoose");

// its a Trip model.
const tripSchema = new Schema({
  numberOfDays: { type: String },
  flight: [{type: Schema.Types.ObjectId, ref: 'Flight'}]
});


const Trip = model("Trip", tripSchema);

module.exports = Trip;