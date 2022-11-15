const mongoose = require("mongoose");

const surpriseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

// the last argument specifies the exact name of the collection
const surprise = mongoose.model("Surprise", surpriseSchema, "Surprises");

module.exports = surprise;
