const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: {
    type: String,
    required: [true, "Image is required"],
    
  },
  discription: {
    type: String,
    required: [true, "Discription is required"],
 
  },
  likes: {
    type: String,
    required: [true, "Likes is required"],
 
  },
});

module.exports = mongoose.model("Post", PostSchema);
