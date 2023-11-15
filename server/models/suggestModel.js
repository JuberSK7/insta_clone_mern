const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuggestSchema = new Schema({
  image: {
    type: String,
    required: [true, "Image is required"],
    
  },
  username: {
    type: String,
    required: [true, "useName is required"],
 
  },
  name: {
    type: String,
    required: [true, "name is required"],
 
  },
});

module.exports = mongoose.model("Suggest", SuggestSchema);