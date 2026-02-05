
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


require("dotenv").config();

const app = express();



app.use(cors());
app.use(express.json());


//This is routes
app.use("/api/leaves", require("./routes/leaveroutes"));


mongoose

  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

module.exports = app;

