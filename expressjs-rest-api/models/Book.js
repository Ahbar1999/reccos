const mongoose = require("mongoose");
const { collection } = require("./Movie");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

// the last argument specifies the exact name of the collection
const book = mongoose.model("Book", bookSchema, "Books");

module.exports = book;
