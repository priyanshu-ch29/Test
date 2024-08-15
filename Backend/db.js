const mongoose = require("mongoose");
require("dotenv").config();

// define the MongoDB connection URL
const mongoURL = process.env.MONGO_URI;

// setup the MongoDB connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "scheduler",
});

// get the default connection
// mongoose maintains a default connectionobject representing the MongoDB connection.

const db = mongoose.connection;

// define event listeners for MongoDB connection

db.on("connected", () => {
  console.log("Connected to the MongoDB Server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from the MongoDB Server");
});

//export the database connection
module.exports = db;
