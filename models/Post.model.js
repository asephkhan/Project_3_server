const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  experience: { type: String },
  trips:[{ type: Schema.Types.ObjectId, ref: 'Trip'}],
  // comes from the front end when user uploads through the form.
  image:{ type: String }
});


const Post = model("Post", postSchema);

module.exports = Post;
