const express = require("express");
const mongoose = require("mongoose");
const reccosRouter = require("./routes/reccosRouter.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://ahbar:nucheEDJnPDEX5yJ@cluster0.wbau6.mongodb.net/Recommedations"
);

app.use(reccosRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
