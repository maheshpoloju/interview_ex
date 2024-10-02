const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB using Mongoose");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
