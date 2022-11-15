const express = require("express");
const movieModel = require("../models/Movie");
const bookModel = require("../models/Book");
const surpriseModel = require("../models/Surprise");
const bodyParser = require("body-parser");

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.json());

app.get("/", async (request, response) => {
  try {
    response.send("hello");
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/movie", async (request, response) => {
  const movie = await movieModel.find();
  console.log(movie);
  try {
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/book", async (request, response) => {
  const book = await bookModel.find();

  try {
    response.send(book);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/surprise", async (request, response) => {
  const surprise = await surpriseModel.find();

  try {
    response.send(surprise);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/movie", async (req, res) => {
  // create a new object based on the movie model using the recieved json data
  console.log(req.body);

  const newDoc = new movieModel(req.body);
  try {
    // save the new object as a document in the collection
    const result = await newDoc.save();
    res.send("Recieved Data");
  } catch (err) {
    console.log(err);
  }
});

app.post("/book", async (req, res) => {
  // create a new object based on the movie model using the recieved json data
  console.log(req.body);

  const newDoc = new bookModel(req.body);
  try {
    // save the new object as a document in the collection
    const result = await newDoc.save();
    res.send("Recieved Data");
  } catch (err) {
    console.log(err);
  }
});

app.post("/surprise", async (req, res) => {
  // create a new object based on the movie model using the recieved json data
  console.log(req.body);

  const newDoc = new surpriseModel(req.body);
  try {
    // save the new object as a document in the collection
    const result = await newDoc.save();
    res.send("Recieved Data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
