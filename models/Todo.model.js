const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const todoSchema = new Schema({
  todo: String,
  trip: { type: Schema.Types.ObjectId, ref: 'Trip' }  
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;