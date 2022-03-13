const { Schema, model } = require("mongoose");

// its a City model.
const citySchema = new Schema({
  cityName: { type: String },
  locations: { type: String },
  thingsToDo: { type: String },
  image: { type: String },
  weather: { type: Number },
});


const City = model("City", citySchema);

module.exports = City;