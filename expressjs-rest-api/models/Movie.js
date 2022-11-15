const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

// the last argument specifies the exact name of the collection
const movie = mongoose.model("Movie", movieSchema, "Movies");

module.exports = movie;
